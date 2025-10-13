export default function Signup() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full px-3 py-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded" />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Sign Up</button>
      </form>
    </div>
  )
}
