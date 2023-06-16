import Navbar from './Navbar'

const Actions = () => {
  return (
    <div className="mb-16">
      <Navbar />
      <h1 className="text-4xl text-center mt-4 font-bold">Actions</h1>
      <h1 className="text-md text-center mt-4">----- Button -----</h1>
      <div className="flex gap-4 justify-center items-center m-2">
        <button className="btn btn-primary btn-sm text-white">Success</button>

        <button className="btn btn-square btn-sm btn-secondary">
          <span className="loading loading-spinner"></span>
        </button>

        <button className="btn ">
          <span className="loading loading-spinner"></span>
          loading
        </button>

        <button className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          Button
        </button>
      </div>

      <h1 className="text-md text-center mt-8">----- Dropdown -----</h1>
      <div className="flex gap-4 justify-center items-center m-`2`">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn m-1 normal-case btn-sm btn-success text-white "
          >
            Click
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-right">
          <label
            tabIndex={0}
            className="btn m-1 btn-sm normal-case btn-info text-white"
          >
            Click Right
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Modal -----</h1>
      <div className="flex gap-4 justify-center items-center m-2">
        {/* Open the modal using ID.showModal() method */}
        <button className="btn" onClick={() => window.my_modal_2.showModal()}>
          open modal
        </button>
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click outside to close</p>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        {/* You can open the modal using ID.showModal() method */}
        <button className="btn" onClick={() => window.my_modal_3.showModal()}>
          open modal x
        </button>
        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </form>
        </dialog>
      </div>

      <h1 className="text-md text-center mt-8">----- Swap -----</h1>
      <div className="flex gap-4 justify-center items-center m-2">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />
          <div className="swap-on text-4xl">😈</div>
          <div className="swap-off text-4xl">😇</div>
        </label>
        <label className="swap swap-flip">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />
          <div className="swap-on text-4xl">🤡</div>
          <div className="swap-off text-4xl">💀</div>
        </label>
      </div>
    </div>
  )
}

export default Actions
