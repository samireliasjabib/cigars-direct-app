import {Construction} from 'lucide-react';
import {Button} from '../design-system/ui/button';
import {Link} from './Link';

export default function UnderDevelopment() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      {/* Gold particles background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {Array.from({length: 20}).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-primary"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <Construction className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1
          className="text-4xl md:text-6xl font-bold text-foreground mb-4"
          style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}
        >
          Under Development
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8">
          We're crafting something special for you
        </p>
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg"
        >
          <Link to="/">Visit Main Site</Link>
        </Button>
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
}
