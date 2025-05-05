import { MainScene } from './components/main-scene/MainScene';
import { ColorPicker } from './components/color-picker/ColorPicker';

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <MainScene />
      <ColorPicker />
    </main>
  );
}
