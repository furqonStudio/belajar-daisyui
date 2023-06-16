import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="mb-16">
      <Navbar />
      <h1 className="text-4xl text-center mt-4 font-bold">Layout</h1>
      <h1 className="text-md text-center mt-8">----- Artboard -----</h1>
      <div className="m-2 flex justify-center">
        <div className="bg-slate-300 artboard phone-1">320×568</div>
      </div>

      <h1 className="text-md text-center mt-8">----- Divider -----</h1>
      <div className="my-2 flex justify-center flex-col gap-4 max-w-md m-auto">
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
        </div>
        <div className="flex w-full">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            content
          </div>
          <div className="divider divider-horizontal">OR</div>
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            content
          </div>
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Drawer -----</h1>
      <div className="my-2 text-center">
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-primary"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Footer -----</h1>
      <div className="my-2 text-center">
        <footer className="footer p-10 bg-base-200 text-base-content">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
        <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
          <div className="items-center grid-flow-col">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>
              ACME Industries Ltd. <br />
              Providing reliable tech since 1992
            </p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>

      <h1 className="text-md text-center mt-8">----- Hero -----</h1>
      <div className="my-2 text-center">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://picsum.photos/id/144/600/600"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-secondary to-blue-500 bg-clip-text">
                Box Office News!
              </h1>

              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-secondary">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Indicator -----</h1>
      <div className="my-2 text-center">
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">99+</span>
          <button className="btn">inbox</button>
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Join -----</h1>
      <div className="my-2 text-center">
        <div className="join">
          <button className="btn join-item">Button</button>
          <button className="btn join-item">Button</button>
          <button className="btn join-item">Button</button>
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Mask -----</h1>
      <div className="my-2 flex justify-center">
        <img className="mask mask-heart" src="https://picsum.photos/100/100" />
      </div>

      <h1 className="text-md text-center mt-8">----- Stack -----</h1>
      <div className="my-2 flex justify-center">
        <div className="stack">
          <div className="card shadow-md bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Notification 1</h2>
              <p>You have 3 unread messages. Tap here to see.</p>
            </div>
          </div>
          <div className="card shadow bg-primary text-primary-content">
            <div className="card-body"></div>
          </div>
          <div className="card shadow-sm bg-primary text-primary-content">
            <div className="card-body"></div>
          </div>
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Toast -----</h1>
      <div className="my-2 flex justify-center">
        {/* Toast itu mengambang */}
        {/* <div className="toast toast-top toast-center">
          <div className="alert alert-info">
            <span>New mail arrived.</span>
          </div>
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Layout
