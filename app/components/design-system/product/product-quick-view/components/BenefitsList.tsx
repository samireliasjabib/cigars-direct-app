import {memo} from 'react';
import {CheckCircle, Truck, ShieldCheck, Medal} from 'lucide-react';

export const BenefitsList = memo(() => (
  <div className="space-y-4 pt-4">
    {[
      {icon: CheckCircle, text: 'In stock, Ready to Ship'},
      {icon: Truck, text: 'Fast, FREE Shipping On Orders $99+'},
      {icon: ShieldCheck, text: 'Secure Payments'},
      {icon: Medal, text: '100% Satisfaction Guaranteed'},
    ].map(({icon: Icon, text}, index) => (
      <div key={index} className="flex items-center gap-2 text-gray-700">
        <Icon className="w-5 h-5 fill-current" />
        <span className="text-sm">{text}</span>
      </div>
    ))}
  </div>
));
