'use client';

import {useState} from 'react';
import {Button} from '~/components/design-system/ui/button';
import {Checkbox} from '~/components/design-system/ui/checkbox';
import {Input} from '~/components/design-system/ui/input';
import {PhoneInput} from '~/components/design-system/ui/phone-input';

interface JoinFormData {
  email: string;
  phone: string;
  birthdate: string;
  marketing: boolean;
}

export function JoinForm() {
  const [formData, setFormData] = useState<JoinFormData>({
    email: '',
    phone: '',
    birthdate: '',
    marketing: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">JOIN CIGARS DIRECT</h2>
      <p className="text-sm text-gray-300">
        Join our community to keep up all things Cigars Direct
      </p>

      <Input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
      />

      <div className="flex gap-2">
        <PhoneInput
          defaultCountry="US"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(value) => setFormData({...formData, phone: value})}
          required
        />
      </div>

      <Input
        type="date"
        placeholder="Birthdate"
        value={formData.birthdate}
        className="text-black"
        onChange={(e) => setFormData({...formData, birthdate: e.target.value})}
        required
      />

      <div className="flex items-start gap-2">
        <Checkbox
          id="marketing"
          checked={formData.marketing}
          onCheckedChange={(checked) =>
            setFormData({...formData, marketing: checked as boolean})
          }
        />
        <label htmlFor="marketing" className="text-xs text-gray-300">
          By entering your phone number, you agree to receive marketing text
          messages from our company at the number provided, including messages
          sent by the autodialer. Consent is not a condition of purchase.
          Message and data rates may apply.
        </label>
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
        Submit
      </Button>
    </form>
  );
}
