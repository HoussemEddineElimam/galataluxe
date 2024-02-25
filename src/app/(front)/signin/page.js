import Link from 'next/link'
import React from 'react'

const Signin = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Password"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Login
        </button>
      </form>
      <p className='text-xl2'>  ليس لديك حساب ؟ <Link href={"/signup"}>أنشئ حساب جديد</Link> </p>
    </div>
  )
}

export default Signin