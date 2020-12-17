import { RefObject, useCallback, useEffect } from 'react';

const useCanvas = (ref: RefObject<HTMLCanvasElement>): void => {
	const resizeCanvas = useCallback((): void => {
		const canvas = ref.current as HTMLCanvasElement;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}, [ref]);

	useEffect(() => {
		window.addEventListener('resize', resizeCanvas);

		return () => {
			window.removeEventListener('resize', resizeCanvas);
		};
	}, [ref, resizeCanvas]);

	useEffect(() => {
		const canvas = ref.current as HTMLCanvasElement;
		resizeCanvas();
		const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
		const x = canvas.width / 2;
		const y = canvas.height - 30;

		canvas.style.background = '#eeeeee';

		ctx.beginPath();
		ctx.arc(x, y, 10, 0, Math.PI * 2);
		ctx.fillStyle = '#0095DD';
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(x - 10, y - 50, 5, 0, Math.PI * 2);
		ctx.fillStyle = '#11ff11';
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(x - 100, y - 200, 70, 0, Math.PI * 2);
		ctx.fillStyle = '#ffaa33';
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(x - 100, y - 100, 60, 0, Math.PI * 2);
		ctx.fillStyle = '#66ffff';
		ctx.fill();
		ctx.closePath();

		ctx.clearRect(x - 100, y - 100, 100, 100);
	}, [ref, resizeCanvas]);
};

export default useCanvas;
