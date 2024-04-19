import './App.css';

function App() {
  const setDarkTheme = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
  };

  const setLightTheme = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
  };

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  return (
    <main className='flex h-screen w-full text-slate-700'>
      <div className='flex flex-col mx-auto p-20 bg-slate-400'>
        <div className='flex mx-auto pb-20'>
          <h1 className='font-extrabold text-3xl px-4'>Famous Quotes</h1>
          <div className='dark_theme'>
            <input
              className='dark_theme_input'
              type='checkbox'
              id='theme-toggle'
              onChange={toggleTheme}
            />
            <label className='dark_theme_label' htmlFor='theme-toggle'></label>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-4 md:gap-10 mx-auto'>
          <div className='flex flex-col gap-6'>
            <h1 className='font-bold text-xl text-center'>Famous People</h1>
            <span className='quote p-4 text-center'>
              The greatest glory in living lies not in never falling, but in
              rising every time we fall.
              <br />
              <span className='font-sans text-sm'>Nelson Mandela</span>
            </span>
            <span className='quote p-4 text-center'>
              Your time is limited, so don&apos;t waste it living someone
              else&apos;s life. Don&apos;t be trapped by dogma – which is living
              with the results of other people&apos;s thinking.
              <br />
              <span className='font-sans text-sm'>Steve Jobs</span>
            </span>
            <span className='quote p-4 text-center'>
              You may say I&apos;m a dreamer, but I&apos;m not the only one. I
              hope someday you&apos;ll join us. And the world will live as one.
              <br />
              <span className='font-sans text-sm'>John Lennon</span>
            </span>
          </div>

          <div className='flex flex-col gap-6'>
            <h1 className='font-bold text-xl text-center'>
              Best Quotes of All Time
            </h1>
            <span className='quote p-4 text-center'>
              Be yourself; everyone else is already taken.
              <br />
              <span className='font-sans text-sm'>Oscar Wilde</span>
            </span>
            <span className='quote p-4 text-center'>
              You must be the change you wish to see in the world.
              <br />
              <span className='font-sans text-sm'>Mahatma Gandhi</span>
            </span>
            <span className='quote p-4 text-center'>
              Do not go where the path may lead, go instead where there is no
              path and leave a trail.
              <br />
              <span className='font-sans text-sm'>Ralph Waldo Emerson</span>
            </span>
          </div>

          <div className='flex flex-col gap-6'>
            <h1 className='font-bold text-xl text-center'>Success Quotes</h1>
            <span className='quote p-4 text-center'>
              Success usually comes to those who are too busy to be looking for
              it.
              <br />
              <span className='font-sans text-sm'>Henry David Thoreau</span>
            </span>
            <span className='quote p-4 text-center'>
              If you want to make your dreams come true, the first thing you
              have to do is wake up.
              <br />
              <span className='font-sans text-sm'>J.M. Power</span>
            </span>
            <span className='quote p-4 text-center'>
              The secret of success is to do the common thing uncommonly well.
              <br />
              <span className='font-sans text-sm'>John D. Rockefeller Jr.</span>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
