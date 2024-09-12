import Starfield from 'react-starfield';

export default function Background() {
    return (
        <div className="fixed -z-1">
            <Starfield
                starCount={2500}
                starColor={[255, 255, 255]}
                speedFactor={0.01}
                backgroundColor="black"
            />
        </div>
    );
}