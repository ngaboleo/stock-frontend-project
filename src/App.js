import './App.css'

function App() {
  return (
    <div class='w-screen h-screen flex justify-center items-center'>
      <form class='p-10 bg-white rounded-xl drop-shadow-lg space-y-5'>
        <h1 class='text-center text-3xl'>Login</h1>
        <div class='flex flex-col space-y-2'>
          <label class='text-sm font-light'>Email</label>
          <input
            class='w-96 px-3 py-2 rounded-md border border-slate-400'
            type='email'
            placeholder='Your Email'
            name='email'
            id='email'
          ></input>
        </div>
        <div class='flex flex-col space-y-2'>
          <label class='text-sm font-light'>Password</label>
          <input
            class='w-96 px-3 py-2 rounded-md border border-slate-400'
            type='password'
            placeholder='your password'
          ></input>
        </div>
        <div class=''>
          <input type='checkbox' name='remember' id='remember' />
          <label text-sm font-light>
            Remember
          </label>
        </div>
        <p class='text-right'>
          <a
            class='text-blue-600 text-sm font-light hover:underline'
            href='https://www.kindacode.com'
          >
            Forget Password?
          </a>
        </p>
      </form>
    </div>
  )
}

export default App
