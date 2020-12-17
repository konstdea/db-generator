import React, { useRef } from 'react';
import useCanvas from './canvas';

const App = (): React.ComponentElement<any, any> => {
	const canvas = useRef<HTMLCanvasElement>(null);
	useCanvas(canvas);

	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<canvas ref={canvas} id="canvas" />
		</div>
	);
};

export default App;
