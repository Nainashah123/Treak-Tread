import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import InputField from '../components/ui/InputField';
import FullWidthButton from '../components/ui/FullWidthButton';
import Header from '../components/Header';

// Validation schema
const resetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
    .required('New password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords must match')
    .required('Please confirm your password'),
});

const ResetPasswordPage = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Password strength requirements
  const passwordRequirements = [
    {
      text: 'Contains one uppercase letter',
      met: /[A-Z]/.test(formData.newPassword),
    },
    {
      text: 'Contains one lowercase letter',
      met: /[a-z]/.test(formData.newPassword),
    },
    {
      text: 'Contains one number',
      met: /\d/.test(formData.newPassword),
    },
    {
      text: 'Contains one special character',
      met: /[!@#$%^&*(),.?":{}|<>]/.test(formData.newPassword),
    },
    {
      text: 'At least 8 characters',
      met: formData.newPassword.length >= 8,
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      // Validate form data
      await resetPasswordSchema.validate(formData, { abortEarly: false });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setIsSubmitted(true);
      
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors: { [key: string]: string } = {};
        error.inner.forEach((err) => {
          if (err.path) {
            validationErrors[err.path] = err.message;
          }
        });
        setErrors(validationErrors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Clear form data on page refresh and auto-focus
  React.useEffect(() => {
    // Clear any existing form data on mount (handles page refresh)
    setFormData({
      newPassword: '',
      confirmPassword: '',
    });
    setErrors({});
    
    // Clear any auto-filled values
    setTimeout(() => {
      const passwordInputs = document.querySelectorAll('input[type="password"]') as NodeListOf<HTMLInputElement>;
      
      passwordInputs.forEach(input => {
        if (input.value) {
          input.value = '';
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
      
      // Auto-focus on first password field
      const firstPasswordInput = document.querySelector('input[type="password"]') as HTMLInputElement;
      if (firstPasswordInput) {
        firstPasswordInput.focus();
      }
    }, 100);
  }, []);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-light">
        <Header />

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 py-32">
          <div className="w-full max-w-md">
            {/* Success Message */}
            <div className="text-center">
              <h1 className="text-heading-4-desktop text-black mb-2">
                Password Updated
              </h1>
              <p className="text-body-medium text-black mb-8">
                Your password has been successfully updated. You can now log in with your new password.
              </p>
              
              <Link to="/login" className="w-full">
                <FullWidthButton
                  type="button"
                  variant="primary"
                  size="small"
                >
                  Continue to Login
                </FullWidthButton>
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-black bg-gray-light">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col gap-8">
              {/* Links Row */}
              <div className="flex">
                {/* Shop Column */}
                <div className="flex-1 flex flex-col gap-6 px-6 py-6">
                  <h3 className="text-heading-6-desktop font-medium text-gray-medium">Shop</h3>
                  <div className="flex flex-col gap-4">
                    <Link to="/shop" className="text-body-xl text-black hover:opacity-70">Shop All</Link>
                    <Link to="/women" className="text-body-xl text-black hover:opacity-70">Women</Link>
                    <Link to="/men" className="text-body-xl text-black hover:opacity-70">Men</Link>
                    <Link to="/best-sellers" className="text-body-xl text-black hover:opacity-70">Best Sellers</Link>
                    <Link to="/new-arrivals" className="text-body-xl text-black hover:opacity-70">New Arrivals</Link>
                    <Link to="/latest-drops" className="text-body-xl text-black hover:opacity-70">Latest Drops</Link>
                  </div>
                </div>

                {/* Vertical Line */}
                <div className="w-px bg-black self-stretch"></div>

                {/* Info Column */}
                <div className="flex-1 flex flex-col gap-6 px-6 py-6">
                  <h3 className="text-heading-6-desktop font-medium text-gray-medium">Info</h3>
                  <div className="flex flex-col gap-4">
                    <Link to="/journal" className="text-body-xl text-black hover:opacity-70">Journal</Link>
                    <Link to="/about" className="text-body-xl text-black hover:opacity-70">About</Link>
                    <Link to="/faq" className="text-body-xl text-black hover:opacity-70">FAQ</Link>
                    <Link to="/contact" className="text-body-xl text-black hover:opacity-70">Contact</Link>
                    <Link to="/login" className="text-body-xl text-black hover:opacity-70">Log In</Link>
                  </div>
                </div>

                {/* Vertical Line */}
                <div className="w-px bg-black self-stretch"></div>

                {/* Legal Column */}
                <div className="flex-1 flex flex-col gap-6 px-6 py-6">
                  <h3 className="text-heading-6-desktop font-medium text-gray-medium">Legal</h3>
                  <div className="flex flex-col gap-4">
                    <Link to="/privacy" className="text-body-xl text-black hover:opacity-70">Privacy Policy</Link>
                    <Link to="/terms" className="text-body-xl text-black hover:opacity-70">Terms of Service</Link>
                    <Link to="/cookies" className="text-body-xl text-black hover:opacity-70">Cookies Settings</Link>
                    <Link to="/shipping" className="text-body-xl text-black hover:opacity-70">Shipping Policy</Link>
                    <Link to="/returns" className="text-body-xl text-black hover:opacity-70">Start a Return</Link>
                  </div>
                </div>

                {/* Vertical Line */}
                <div className="w-px bg-black self-stretch"></div>

                {/* Social Column */}
                <div className="flex-1 flex flex-col gap-6 px-6 py-6">
                  <h3 className="text-heading-6-desktop font-medium text-gray-medium">Social</h3>
                  <div className="flex flex-col gap-4">
                    <Link to="/facebook" className="text-body-xl text-black hover:opacity-70">Facebook</Link>
                    <Link to="/instagram" className="text-body-xl text-black hover:opacity-70">Instagram</Link>
                    <Link to="/threads" className="text-body-xl text-black hover:opacity-70">Threads</Link>
                    <Link to="/twitter" className="text-body-xl text-black hover:opacity-70">X (Twitter)</Link>
                    <Link to="/tiktok" className="text-body-xl text-black hover:opacity-70">TikTok</Link>
                  </div>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="flex flex-col gap-8 pt-8">
                <div className="flex justify-between items-center px-6">
                  <p className="text-body-medium text-gray-600">© Track&Tread 2025</p>
                  
                  {/* Large Brand Logo - centered */}
                  <div className="flex-1 flex justify-center">
                    <Link to="/" className="text-6xl md:text-7xl font-bold text-black tracking-tight">
                      TRACK&TREAD
                    </Link>
                  </div>
                  
                  <div className="flex gap-2">
                    {/* Payment methods - matching Figma design */}
                    <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                    <div className="w-8 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                    <div className="w-8 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">AMEX</div>
                    <div className="w-8 h-6 bg-gray-800 rounded text-white text-xs flex items-center justify-center font-bold">SP</div>
                    <div className="w-8 h-6 bg-gray-800 rounded text-white text-xs flex items-center justify-center font-bold">AP</div>
                    <div className="w-8 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">GP</div>
                    <div className="w-8 h-6 bg-yellow-500 rounded text-white text-xs flex items-center justify-center font-bold">PP</div>
                    <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-light">
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="w-full max-w-md">
          {/* Header Text */}
          <div className="text-center mb-8">
            <h1 className="text-heading-4-desktop text-black mb-2">
              Reset Password
            </h1>
            <p className="text-body-medium text-black">
              Enter a new password for your account.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full">
            {/* Password Fields */}
            <div className="w-full flex flex-col gap-4 mb-8">
              <div>
                <InputField
                  label="New password"
                  placeholder="Enter your new password"
                  type="password"
                  value={formData.newPassword}
                  onChange={(value) => handleInputChange('newPassword', value)}
                  showPasswordToggle={true}
                  disabled={isLoading}
                />
                {errors.newPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
                )}
                
                {/* Password Strength Requirements */}
                {formData.newPassword && (
                  <div className="mt-3 space-y-2">
                    {passwordRequirements.map((requirement, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                          requirement.met ? 'bg-green-500' : 'bg-gray-300'
                        }`}>
                          {requirement.met && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-sm ${
                          requirement.met ? 'text-green-600' : 'text-gray-500'
                        }`}>
                          {requirement.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <InputField
                  label="Re-enter new password"
                  placeholder="Confirm your new password"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(value) => handleInputChange('confirmPassword', value)}
                  showPasswordToggle={true}
                  disabled={isLoading}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            {/* Button */}
            <div className="w-full">
              <FullWidthButton
                type="submit"
                variant="primary"
                size="small"
                disabled={isLoading}
              >
                {isLoading ? 'Saving...' : 'Save New Password'}
              </FullWidthButton>
            </div>
          </form>

          {/* Back to Login Link */}
          <div className="text-center mt-6">
            <p className="text-body-medium text-black">
              Remember your password?{' '}
              <Link to="/login" className="text-purple-brand hover:opacity-70 transition-opacity" style={{ color: '#623CEA' }}>
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black bg-gray-light">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col gap-8">
            {/* Links Row */}
            <div className="flex">
              {/* Shop Column */}
              <div className="flex-1 flex flex-col gap-6 px-6 py-6">
                <h3 className="text-heading-6-desktop font-medium text-gray-medium">Shop</h3>
                <div className="flex flex-col gap-4">
                  <Link to="/shop" className="text-body-xl text-black hover:opacity-70">Shop All</Link>
                  <Link to="/women" className="text-body-xl text-black hover:opacity-70">Women</Link>
                  <Link to="/men" className="text-body-xl text-black hover:opacity-70">Men</Link>
                  <Link to="/best-sellers" className="text-body-xl text-black hover:opacity-70">Best Sellers</Link>
                  <Link to="/new-arrivals" className="text-body-xl text-black hover:opacity-70">New Arrivals</Link>
                  <Link to="/latest-drops" className="text-body-xl text-black hover:opacity-70">Latest Drops</Link>
                </div>
              </div>

              {/* Vertical Line */}
              <div className="w-px bg-black self-stretch"></div>

              {/* Info Column */}
              <div className="flex-1 flex flex-col gap-6 px-6 py-6">
                <h3 className="text-heading-6-desktop font-medium text-gray-medium">Info</h3>
                <div className="flex flex-col gap-4">
                  <Link to="/journal" className="text-body-xl text-black hover:opacity-70">Journal</Link>
                  <Link to="/about" className="text-body-xl text-black hover:opacity-70">About</Link>
                  <Link to="/faq" className="text-body-xl text-black hover:opacity-70">FAQ</Link>
                  <Link to="/contact" className="text-body-xl text-black hover:opacity-70">Contact</Link>
                  <Link to="/login" className="text-body-xl text-black hover:opacity-70">Log In</Link>
                </div>
              </div>

              {/* Vertical Line */}
              <div className="w-px bg-black self-stretch"></div>

              {/* Legal Column */}
              <div className="flex-1 flex flex-col gap-6 px-6 py-6">
                <h3 className="text-heading-6-desktop font-medium text-gray-medium">Legal</h3>
                <div className="flex flex-col gap-4">
                  <Link to="/privacy" className="text-body-xl text-black hover:opacity-70">Privacy Policy</Link>
                  <Link to="/terms" className="text-body-xl text-black hover:opacity-70">Terms of Service</Link>
                  <Link to="/cookies" className="text-body-xl text-black hover:opacity-70">Cookies Settings</Link>
                  <Link to="/shipping" className="text-body-xl text-black hover:opacity-70">Shipping Policy</Link>
                  <Link to="/returns" className="text-body-xl text-black hover:opacity-70">Start a Return</Link>
                </div>
              </div>

              {/* Vertical Line */}
              <div className="w-px bg-black self-stretch"></div>

              {/* Social Column */}
              <div className="flex-1 flex flex-col gap-6 px-6 py-6">
                <h3 className="text-heading-6-desktop font-medium text-gray-medium">Social</h3>
                <div className="flex flex-col gap-4">
                  <Link to="/facebook" className="text-body-xl text-black hover:opacity-70">Facebook</Link>
                  <Link to="/instagram" className="text-body-xl text-black hover:opacity-70">Instagram</Link>
                  <Link to="/threads" className="text-body-xl text-black hover:opacity-70">Threads</Link>
                  <Link to="/twitter" className="text-body-xl text-black hover:opacity-70">X (Twitter)</Link>
                  <Link to="/tiktok" className="text-body-xl text-black hover:opacity-70">TikTok</Link>
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="flex flex-col gap-8 pt-8">
              <div className="flex justify-between items-center px-6">
                <p className="text-body-medium text-gray-600">© Track&Tread 2025</p>
                
                {/* Large Brand Logo - centered */}
                <div className="flex-1 flex justify-center">
                  <Link to="/" className="text-6xl md:text-7xl font-bold text-black tracking-tight">
                    TRACK&TREAD
                  </Link>
                </div>
                
                <div className="flex gap-2">
                  {/* Payment methods - matching Figma design */}
                  <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                  <div className="w-8 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                  <div className="w-8 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">AMEX</div>
                  <div className="w-8 h-6 bg-gray-800 rounded text-white text-xs flex items-center justify-center font-bold">SP</div>
                  <div className="w-8 h-6 bg-gray-800 rounded text-white text-xs flex items-center justify-center font-bold">AP</div>
                  <div className="w-8 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">GP</div>
                  <div className="w-8 h-6 bg-yellow-500 rounded text-white text-xs flex items-center justify-center font-bold">PP</div>
                  <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResetPasswordPage;
