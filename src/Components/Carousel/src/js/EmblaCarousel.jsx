import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
	NextButton,
	PrevButton,
	usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number, min, max) =>
	Math.min(Math.max(number, min), max);

const EmblaCarousel = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);
	const tweenFactor = useRef(0);
	const tweenNodes = useRef([]);

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	const setTweenNodes = useCallback((emblaApi) => {
		tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
			return slideNode.querySelector('.embla__slide__number');
		});
	}, []);

	const setTweenFactor = useCallback((emblaApi) => {
		tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
	}, []);

	const tweenScale = useCallback((emblaApi, eventName) => {
		const engine = emblaApi.internalEngine();
		const scrollProgress = emblaApi.scrollProgress();
		const slidesInView = emblaApi.slidesInView();
		const isScrollEvent = eventName === 'scroll';

		emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
			let diffToTarget = scrollSnap - scrollProgress;
			const slidesInSnap = engine.slideRegistry[snapIndex];

			slidesInSnap.forEach((slideIndex) => {
				if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

				if (engine.options.loop) {
					engine.slideLooper.loopPoints.forEach((loopItem) => {
						const target = loopItem.target();

						if (slideIndex === loopItem.index && target !== 0) {
							const sign = Math.sign(target);

							if (sign === -1) {
								diffToTarget = scrollSnap - (1 + scrollProgress);
							}
							if (sign === 1) {
								diffToTarget = scrollSnap + (1 - scrollProgress);
							}
						}
					});
				}

				const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
				const scale = numberWithinRange(tweenValue, 0.7, 1).toString();
				const tweenNode = tweenNodes.current[slideIndex];
				tweenNode.style.transform = `scale(${scale})`;
			});
		});
	}, []);

	const tweenOpacity = useCallback((emblaApi, eventName) => {
		const engine = emblaApi.internalEngine();
		const scrollProgress = emblaApi.scrollProgress();
		const slidesInView = emblaApi.slidesInView();
		const isScrollEvent = eventName === 'scroll';

		emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
			let diffToTarget = scrollSnap - scrollProgress;
			const slidesInSnap = engine.slideRegistry[snapIndex];

			slidesInSnap.forEach((slideIndex) => {
				if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

				if (engine.options.loop) {
					engine.slideLooper.loopPoints.forEach((loopItem) => {
						const target = loopItem.target();

						if (slideIndex === loopItem.index && target !== 0) {
							const sign = Math.sign(target);

							if (sign === -1) {
								diffToTarget = scrollSnap - (1 + scrollProgress);
							}
							if (sign === 1) {
								diffToTarget = scrollSnap + (1 - scrollProgress);
							}
						}
					});
				}

				const tweenValue =
					1 - Math.abs(1.4 * (diffToTarget * tweenFactor.current));
				const opacity = numberWithinRange(tweenValue, 0, 1).toString();
				emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
			});
		});
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		setTweenNodes(emblaApi);
		setTweenFactor(emblaApi);
		tweenScale(emblaApi);
		tweenOpacity(emblaApi);

		emblaApi
			.on('reInit', setTweenNodes)
			.on('reInit', setTweenFactor)
			.on('reInit', tweenScale)
			.on('scroll', tweenScale)
			.on('slideFocus', tweenScale)
			.on('reInit', tweenOpacity)
			.on('scroll', tweenOpacity)
			.on('slideFocus', tweenOpacity);
	}, [emblaApi, tweenScale, tweenOpacity, setTweenFactor, setTweenNodes]);

	return (
		<div className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((item, index) => (
						<div className="embla__slide" key={index}>
							<div className="embla__slide__number">
								<h3 className="name-review">{item.name}</h3>
								<p className="comment-review">{item.comment}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="embla__controls">
				<div className="embla__buttons">
					<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
					<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				</div>
			</div>
		</div>
	);
};

export default EmblaCarousel;