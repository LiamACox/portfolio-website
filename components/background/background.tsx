import Starfield from 'react-starfield';

export default function Background() {
    return (
        <div className="bg-fixed z-0 inset-0">
            <Starfield
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.01}
                backgroundColor="black"
            />
        </div>
    );
}