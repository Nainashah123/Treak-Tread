import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';

// Form Types
interface EditNameForm {
  firstName: string;
  lastName: string;
}

interface EditEmailForm {
  email: string;
}

interface EditPasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

// Yup Validation Schemas
const editNameSchema = yup.object({
  firstName: yup.string().required('First name is required').min(2, 'First name must be at least 2 characters'),
  lastName: yup.string().required('Last name is required').min(2, 'Last name must be at least 2 characters'),
});

const editEmailSchema = yup.object({
  email: yup.string().required('Email is required').email('Please enter a valid email address'),
});

const editPasswordSchema = yup.object({
  currentPassword: yup.string().required('Current password is required'),
  newPassword: yup.string().required('New password is required').min(8, 'Password must be at least 8 characters'),
  confirmPassword: yup.string().required('Please confirm your password').oneOf([yup.ref('newPassword')], 'Passwords must match'),
});

const editShippingSchema = yup.object({
  country: yup.string().required('Country is required'),
  address: yup.string().required('Address is required').min(5, 'Address must be at least 5 characters'),
  apartment: yup.string().optional().default(''),
  city: yup.string().required('City is required').min(2, 'City must be at least 2 characters'),
  province: yup.string().required('Province is required'),
  postalCode: yup.string().required('Postal code is required').matches(/^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/, 'Please enter a valid postal code (e.g., K1A 0A6)'),
});

// Explicit type definition for proper TypeScript inference
interface EditShippingForm {
  country: string;
  address: string;
  apartment?: string;
  city: string;
  province: string;
  postalCode: string;
}

const MyAccountPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'order-history' | 'profile-settings'>('order-history');
  const [activeModal, setActiveModal] = useState<'edit-name' | 'edit-email' | 'edit-password' | 'edit-shipping' | null>(null);

  // React Hook Form instances
  const nameForm = useForm<EditNameForm>({
    resolver: yupResolver(editNameSchema),
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
    },
  });

  const emailForm = useForm<EditEmailForm>({
    resolver: yupResolver(editEmailSchema),
    defaultValues: {
      email: 'johndoe@example.com',
    },
  });

  const passwordForm = useForm<EditPasswordForm>({
    resolver: yupResolver(editPasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const shippingForm = useForm<EditShippingForm>({
    resolver: yupResolver(editShippingSchema) as any,
    defaultValues: {
      country: 'Canada',
      address: "206 Batran's Street",
      apartment: 'Unit 39',
      city: 'Ottawa',
      province: 'Ontario',
      postalCode: 'K1A 0A6',
    },
  });

  // Form submission handlers
  const onNameSubmit = (data: EditNameForm) => {
    console.log('Name updated:', data);
    // Here you would typically make an API call to update the user's name
    setActiveModal(null);
    nameForm.reset();
  };

  const onEmailSubmit = (data: EditEmailForm) => {
    console.log('Email updated:', data);
    // Here you would typically make an API call to update the user's email
    setActiveModal(null);
    emailForm.reset();
  };

  const onPasswordSubmit = (data: EditPasswordForm) => {
    console.log('Password updated:', data);
    // Here you would typically make an API call to update the user's password
    setActiveModal(null);
    passwordForm.reset();
  };

  const onShippingSubmit = (data: EditShippingForm) => {
    console.log('Shipping address updated:', data);
    // Here you would typically make an API call to update the user's shipping address
    setActiveModal(null);
    shippingForm.reset();
  };

  const sidebarItems = [
    { id: 'order-history', label: 'Order History' },
    { id: 'profile-settings', label: 'Profile Settings' },
  ];

  const renderOrderHistory = () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-5xl font-medium text-black">
          You have no orders yet
        </h2>
        <p className="text-xl text-black">
          Order history empty. Once orders are placed, all Nude order details will be displayed here.
        </p>
      </div>
      <div className="mt-4">
        <Link to="/shop">
          <Button 
            variant="primary" 
            size="small"
            className="bg-black text-white px-6 py-4 text-xl font-medium hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );

  const renderProfileSettings = () => (
    <div className="flex flex-col">
      {/* First Row - Full Name and Email */}
      <div className="flex border-b border-black">
        {/* Full Name Tile */}
        <div className="flex-1 flex justify-between items-center p-6 border-r border-black">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-medium text-[#969696]">Full Name</span>
            <span className="text-3xl font-medium text-black">John Doe</span>
          </div>
          <button 
            onClick={() => setActiveModal('edit-name')}
            className="bg-white text-black border border-black px-6 py-4 text-xl font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            Edit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474L8.5 11.06 4.939 7.5 11.013 1.427ZM3.75 8.689 7.311 12.25H2.5v-4.811l1.25 1.25Z" fill="black"/>
            </svg>
          </button>
        </div>
        
        {/* Email Tile */}
        <div className="flex-1 flex justify-between items-center p-6">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-medium text-[#969696]">Email Address</span>
            <span className="text-3xl font-medium text-black">johndoe@example.com</span>
          </div>
          <button 
            onClick={() => setActiveModal('edit-email')}
            className="bg-white text-black border border-black px-6 py-4 text-xl font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            Edit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474L8.5 11.06 4.939 7.5 11.013 1.427ZM3.75 8.689 7.311 12.25H2.5v-4.811l1.25 1.25Z" fill="black"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Second Row - Shipping Address and Phone Number */}
      <div className="flex border-b border-black">
        {/* Shipping Address Tile */}
        <div className="flex-1 flex justify-between items-center p-6 border-r border-black">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-medium text-[#969696]">Shipping Address</span>
            <span className="text-3xl font-medium text-black">206 Batran's Street, 39, 2044 Ontario, Ottawa</span>
          </div>
          <button 
            onClick={() => setActiveModal('edit-shipping')}
            className="bg-white text-black border border-black px-6 py-4 text-xl font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            Edit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474L8.5 11.06 4.939 7.5 11.013 1.427ZM3.75 8.689 7.311 12.25H2.5v-4.811l1.25 1.25Z" fill="black"/>
            </svg>
          </button>
        </div>
        
        {/* Phone Number Tile */}
        <div className="flex-1 flex justify-between items-center p-6">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-medium text-[#969696]">Phone Number</span>
            <span className="text-3xl font-medium text-black">+1 222 333 4444</span>
          </div>
          <button className="bg-white text-black border border-black px-6 py-4 text-xl font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            Edit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474L8.5 11.06 4.939 7.5 11.013 1.427ZM3.75 8.689 7.311 12.25H2.5v-4.811l1.25 1.25Z" fill="black"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Third Row - Password (Full Width) */}
      <div className="flex">
        {/* Password Tile - Full Width */}
        <div className="flex-1 flex justify-between items-center p-6">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-medium text-[#969696]">Password</span>
            <span className="text-3xl font-medium text-black">**************************</span>
          </div>
          <button 
            onClick={() => setActiveModal('edit-password')}
            className="bg-white text-black border border-black px-6 py-4 text-xl font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            Edit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474L8.5 11.06 4.939 7.5 11.013 1.427ZM3.75 8.689 7.311 12.25H2.5v-4.811l1.25 1.25Z" fill="black"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  // Modal Components
  const renderEditNameModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/20"
        onClick={() => setActiveModal(null)}
      />
      
      {/* Modal */}
      <div className="relative bg-white border border-black w-[660px]">
        {/* Header */}
        <div className="border-b border-black p-6">
          <h2 className="text-3xl font-medium text-black">Edit Name</h2>
        </div>
        
        {/* Form */}
        <form onSubmit={nameForm.handleSubmit(onNameSubmit)} className="p-8 space-y-6">
          <div>
            <label className="block text-xl font-medium text-black mb-2">First name</label>
            <input
              type="text"
              {...nameForm.register('firstName')}
              className={`w-full px-4 py-4 border text-xl font-medium ${
                nameForm.formState.errors.firstName ? 'border-red-500' : 'border-black'
              }`}
            />
            {nameForm.formState.errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{nameForm.formState.errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-xl font-medium text-black mb-2">Last name</label>
            <input
              type="text"
              {...nameForm.register('lastName')}
              className={`w-full px-4 py-4 border text-xl font-medium ${
                nameForm.formState.errors.lastName ? 'border-red-500' : 'border-black'
              }`}
            />
            {nameForm.formState.errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{nameForm.formState.errors.lastName.message}</p>
            )}
          </div>
          
          {/* Footer */}
          <div className="border-t border-black pt-8 flex gap-4">
            <button 
              type="submit"
              className="flex-1 bg-black text-white py-4 text-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Update
            </button>
            <button 
              type="button"
              onClick={() => setActiveModal(null)}
              className="flex-1 bg-white text-black border border-black py-4 text-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderEditEmailModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/20"
        onClick={() => setActiveModal(null)}
      />
      
      {/* Modal */}
      <div className="relative bg-white border border-black w-[660px]">
        {/* Header */}
        <div className="border-b border-black p-6">
          <h2 className="text-3xl font-medium text-black">Edit Email Address</h2>
        </div>
        
        {/* Form */}
        <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="p-8">
          <div>
            <label className="block text-xl font-medium text-black mb-2">Email address</label>
            <input
              type="email"
              {...emailForm.register('email')}
              className={`w-full px-4 py-4 border text-xl font-medium ${
                emailForm.formState.errors.email ? 'border-red-500' : 'border-black'
              }`}
            />
            {emailForm.formState.errors.email && (
              <p className="text-red-500 text-sm mt-1">{emailForm.formState.errors.email.message}</p>
            )}
          </div>
          
          {/* Footer */}
          <div className="border-t border-black pt-8 flex gap-4">
            <button 
              type="submit"
              className="flex-1 bg-black text-white py-4 text-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Update
            </button>
            <button 
              type="button"
              onClick={() => setActiveModal(null)}
              className="flex-1 bg-white text-black border border-black py-4 text-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderEditPasswordModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/20"
        onClick={() => setActiveModal(null)}
      />
      
      {/* Modal */}
      <div className="relative bg-white border border-black w-[660px]">
        {/* Header */}
        <div className="border-b border-black p-6">
          <h2 className="text-3xl font-medium text-black">Edit Password</h2>
        </div>
        
        {/* Form */}
        <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="p-8 space-y-6">
          <div>
            <label className="block text-xl font-medium text-black mb-2">Current password</label>
            <input
              type="password"
              {...passwordForm.register('currentPassword')}
              className={`w-full px-4 py-4 border text-xl font-medium ${
                passwordForm.formState.errors.currentPassword ? 'border-red-500' : 'border-black'
              }`}
              placeholder="Enter current password"
            />
            {passwordForm.formState.errors.currentPassword && (
              <p className="text-red-500 text-sm mt-1">{passwordForm.formState.errors.currentPassword.message}</p>
            )}
          </div>
          <div>
            <label className="block text-xl font-medium text-black mb-2">New password</label>
            <input
              type="password"
              {...passwordForm.register('newPassword')}
              className={`w-full px-4 py-4 border text-xl font-medium ${
                passwordForm.formState.errors.newPassword ? 'border-red-500' : 'border-black'
              }`}
              placeholder="Enter new password"
            />
            {passwordForm.formState.errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">{passwordForm.formState.errors.newPassword.message}</p>
            )}
          </div>
          <div>
            <label className="block text-xl font-medium text-black mb-2">Confirm new password</label>
            <input
              type="password"
              {...passwordForm.register('confirmPassword')}
              className={`w-full px-4 py-4 border text-xl font-medium ${
                passwordForm.formState.errors.confirmPassword ? 'border-red-500' : 'border-black'
              }`}
              placeholder="Confirm new password"
            />
            {passwordForm.formState.errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{passwordForm.formState.errors.confirmPassword.message}</p>
            )}
          </div>
          
          {/* Footer */}
          <div className="border-t border-black pt-8 flex gap-4">
            <button 
              type="submit"
              className="flex-1 bg-black text-white py-4 text-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Update
            </button>
            <button 
              type="button"
              onClick={() => setActiveModal(null)}
              className="flex-1 bg-white text-black border border-black py-4 text-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderEditShippingModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/20"
        onClick={() => setActiveModal(null)}
      />
      
      {/* Modal */}
      <div className="relative bg-white border border-black w-[660px]">
        {/* Header */}
        <div className="border-b border-black p-6">
          <h2 className="text-3xl font-medium text-black">Edit Shipping Address</h2>
        </div>
        
        {/* Form */}
        <form onSubmit={shippingForm.handleSubmit(onShippingSubmit)} className="p-8 space-y-6">
          <div>
            <label className="block text-xl font-medium text-black mb-2">Country/region</label>
            <input
              type="text"
              {...shippingForm.register('country')}
              className={`w-full px-4 py-4 border text-xl font-medium ${
                shippingForm.formState.errors.country ? 'border-red-500' : 'border-black'
              }`}
            />
            {shippingForm.formState.errors.country && (
              <p className="text-red-500 text-sm mt-1">{shippingForm.formState.errors.country.message}</p>
            )}
          </div>
          <div>
            <label className="block text-xl font-medium text-black mb-2">Address</label>
            <input
              type="text"
              {...shippingForm.register('address')}
              className={`w-full px-4 py-4 border text-xl font-medium ${
                shippingForm.formState.errors.address ? 'border-red-500' : 'border-black'
              }`}
            />
            {shippingForm.formState.errors.address && (
              <p className="text-red-500 text-sm mt-1">{shippingForm.formState.errors.address.message}</p>
            )}
          </div>
          <div>
            <label className="block text-xl font-medium text-black mb-2">Apartment, suite, etc. (optional)</label>
            <input
              type="text"
              {...shippingForm.register('apartment')}
              className="w-full px-4 py-4 border border-black text-xl font-medium"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xl font-medium text-black mb-2">City</label>
              <input
                type="text"
                {...shippingForm.register('city')}
                className={`w-full px-4 py-4 border text-xl font-medium ${
                  shippingForm.formState.errors.city ? 'border-red-500' : 'border-black'
                }`}
              />
              {shippingForm.formState.errors.city && (
                <p className="text-red-500 text-sm mt-1">{shippingForm.formState.errors.city.message}</p>
              )}
            </div>
            <div>
              <label className="block text-xl font-medium text-black mb-2">Province</label>
              <select 
                {...shippingForm.register('province')}
                className={`w-full px-4 py-4 border text-xl font-medium ${
                  shippingForm.formState.errors.province ? 'border-red-500' : 'border-black'
                }`}
              >
                <option value="Ontario">Ontario</option>
                <option value="Quebec">Quebec</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Alberta">Alberta</option>
                <option value="Manitoba">Manitoba</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                <option value="Prince Edward Island">Prince Edward Island</option>
                <option value="Northwest Territories">Northwest Territories</option>
                <option value="Nunavut">Nunavut</option>
                <option value="Yukon">Yukon</option>
              </select>
              {shippingForm.formState.errors.province && (
                <p className="text-red-500 text-sm mt-1">{shippingForm.formState.errors.province.message}</p>
              )}
            </div>
            <div>
              <label className="block text-xl font-medium text-black mb-2">Postal code</label>
              <input
                type="text"
                {...shippingForm.register('postalCode')}
                className={`w-full px-4 py-4 border text-xl font-medium ${
                  shippingForm.formState.errors.postalCode ? 'border-red-500' : 'border-black'
                }`}
                placeholder="K1A 0A6"
              />
              {shippingForm.formState.errors.postalCode && (
                <p className="text-red-500 text-sm mt-1">{shippingForm.formState.errors.postalCode.message}</p>
              )}
            </div>
          </div>
          
          {/* Footer */}
          <div className="border-t border-black pt-8 flex gap-4">
            <button 
              type="submit"
              className="flex-1 bg-black text-white py-4 text-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Update
            </button>
            <button 
              type="button"
              onClick={() => setActiveModal(null)}
              className="flex-1 bg-white text-black border border-black py-4 text-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <Header />
      
      {/* Main Content */}
      <section className="pt-10">
        <div className="w-full">
          {/* My Account Title - Full Width */}
          <div className="px-6 mb-6">
            <h1 className="text-6xl md:text-8xl font-medium leading-tight tracking-tight text-black">
              My Account
            </h1>
          </div>
          
          {/* Horizontal Line */}
          <div className="w-full border-b border-black"></div>
          
          {/* Account Content */}
          <div className="flex">
            {/* Left Sidebar */}
            <div className="w-1/3 border-r border-black p-6">
              <nav className="space-y-4">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id as 'order-history' | 'profile-settings')}
                    className={`w-full text-left text-xl font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-[#623CEA]'
                        : 'text-black hover:opacity-70'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Log Out Button */}
                <button className="w-full text-left text-xl font-medium text-black hover:opacity-70 transition-colors">
                  Log Out
                </button>
              </nav>
            </div>
            
            {/* Right Content */}
            <div className="flex-1">
              {activeSection === 'order-history' && (
                <div className="p-6">
                  {renderOrderHistory()}
                </div>
              )}
              {activeSection === 'profile-settings' && renderProfileSettings()}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Modals */}
      {activeModal === 'edit-name' && renderEditNameModal()}
      {activeModal === 'edit-email' && renderEditEmailModal()}
      {activeModal === 'edit-password' && renderEditPasswordModal()}
      {activeModal === 'edit-shipping' && renderEditShippingModal()}
    </div>
  );
};

export default MyAccountPage;
