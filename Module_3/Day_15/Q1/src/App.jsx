
function App() {
  return (
    <div class="p-4">
      <div class="pl-5">
      <button class="p-3 bg-gray-200 rounded-xl hover:bg-gray-300 active:bg-gray-500 cursor-pointer text-xl">Click Here !</button>
      </div>
      <div class="m-4 shadow-lg hover:scale-105 w-100 transition-transform">
        <img src="https://img.freepik.com/free-photo/mixed-fruits-with-apple-banana-orange-other_74190-938.jpg?semt=ais_hybrid&w=740&q=80" alt="fruits" />
      </div>
      <div class="p-4 sm:text-xl md:text-3xl lg:text-5xl">
        <h2 class="bg-linear-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text inline-block font-bold">Welcome to Thailand ! Explore this beautiful city !!</h2>
      </div>
      <div class="list-disc list-inside pl-5 text-xl text-green-600 hover:text-blue-600">
        <li type="square">Apple</li>
        <li type="square">Orange</li>
        <li type="square">Mango</li>
        <li type="square">Grapes</li>
        <li type="square">Kiwi</li>
      </div>
      <div class="m-5 p-5 w-100 h-140 border rounded">
        <img src="https://www.cdn.travejar.com/storage/india_attraction_tour/1748254838.webp" alt="Wat Arun" />
        <p class="text-xl text-center font-semibold p-1">Wat Arun Temple</p>
        <p class="text-justify p-1">Wat Arun (Temple of Dawn) is a stunning Buddhist temple in Bangkok, Thailand, famous for its central, porcelain-decorated spire that symbolizes Mount Meru, located on the west bank of the Chao Phraya River and representing the transition from darkness to light, featuring Khmer-Thai architecture and offering incredible views, especially at sunrise/sunset.</p>
        <div class="flex justify-center items-center">  
          <button class="p-3 bg-amber-400 rounded-xl hover:bg-amber-300 active:bg-amber-500 cursor-pointer text-xl">Learn More</button>
        </div>
      </div>
      <table class="min-w-full border border-emerald-300 border-collapse">
          <thead class="bg-emerald-100">
            <tr>
              <th class="border border-emerald-300 px-4 py-2 text-indigo-900">Name</th>
              <th class="border border-emerald-300 px-4 py-2 text-indigo-900">Role</th>
              <th class="border border-emerald-300 px-4 py-2 text-indigo-900">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="even:bg-emerald-50 hover:bg-emerald-200 transition-colors text-center">
              <td class="border border-emerald-300 px-4 py-2">Ananya</td>
              <td class="border border-emerald-300 px-4 py-2">Designer</td>
              <td class="border border-emerald-300 px-4 py-2">Active</td>
            </tr>
            <tr class="even:bg-emerald-50 hover:bg-emerald-200 transition-colors text-center">
              <td class="border border-emerald-300 px-4 py-2">Rajesh</td>
              <td class="border border-emerald-300 px-4 py-2">Developer</td>
              <td class="border border-emerald-300 px-4 py-2">Inactive</td>
            </tr>
            <tr class="even:bg-emerald-50 hover:bg-emerald-200 transition-colors text-center">
              <td class="border border-emerald-300 px-4 py-2">Madhu</td>
              <td class="border border-emerald-300 px-4 py-2">Manager</td>
              <td class="border border-emerald-300 px-4 py-2">Active</td>
            </tr>
          </tbody>
      </table>
      <div class="p-4">
        <form class="p-2 m-2 border rounded border-red-600">
          <p>Name : <input type="text" placeholder="Enter name" class="border rounded m-1 p-1 focus:border-red-600"/></p>
          <p>Email : <input type="email" placeholder="Enter email" class="border rounded m-1 p-1 focus:border-red-600"/></p>
          <p>Password : <input type="password" placeholder="Enter password" class="border rounded m-1 p-1 focus:border-red-600"/></p>
          <div>
            <button class="px-5 py-3 rounded-xl text-white bg-green-600 hover:bg-green-500 active:bg-green-700 cursor-pointer">Submit</button>
          </div>
          </form>
      </div>
      
    </div>
  )
}
export default App;