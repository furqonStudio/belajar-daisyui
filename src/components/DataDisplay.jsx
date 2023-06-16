import Navbar from './Navbar'

const DataDisplay = () => {
  return (
    <div className="mb-16">
      <Navbar />
      <h1 className="text-4xl text-center mt-4 font-bold">Data Display</h1>
      <h1 className="text-md text-center mt-4">----- Accordion -----</h1>
      <div className="block p-4 lg:w-1/2 m-auto">
        <div className="collapse collapse-arrow bg-base-200 mb-2">
          <input type="checkbox" name="my-accordion" />
          <div className="collapse-title text-lg font-medium">
            Coba klik disini deh
          </div>
          <div className="collapse-content">
            <p>coba klik dibawahnya</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-2">
          <input type="checkbox" name="my-accordion" />
          <div className="collapse-title text-lg font-medium">
            Lanjut klik disini
          </div>
          <div className="collapse-content">
            <p>kosong</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-2">
          <input type="checkbox" name="my-accordion" />
          <div className="collapse-title text-lg font-medium">
            Jangan klik disini tapi
          </div>
          <div className="collapse-content">
            <p>Ngapain diklik</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
            Click me to show/hide content
          </div>
          <div className="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
            <p>hello</p>
          </div>
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Alert -----</h1>
      <div className="block p-4 lg:w-1/2 m-auto">
        <div className="alert alert-warning mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Warning: Invalid email address!</span>
        </div>
        <div className="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>we use cookies for no reason.</span>
          <div>
            <button className="btn btn-sm">Deny</button>
            <button className="btn btn-sm btn-primary">Accept</button>
          </div>
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Avatar -----</h1>
      <div className="flex justify-center p-4 items-center">
        <div className="avatar mr-4">
          <div className="w-12 rounded">
            <img src="https://picsum.photos/200/300" />
          </div>
        </div>
        <div className="avatar mr-4">
          <div className="w-12 rounded-full">
            <img src="https://picsum.photos/200/300" />
          </div>
        </div>
        <div className="avatar mr-4">
          <div className="w-12 mask mask-squircle">
            <img src="https://picsum.photos/200/300" />
          </div>
        </div>
        <div className="avatar mr-4">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://picsum.photos/200/300" />
          </div>
        </div>
        <div className="avatar online mr-4">
          <div className="w-12 rounded-full">
            <img src="https://picsum.photos/200/300" />
          </div>
        </div>
        <div className="avatar offline mr-4">
          <div className="w-12 rounded-full">
            <img src="https://picsum.photos/200/300" />
          </div>
        </div>

        <div className="avatar-group -space-x-6 ">
          <div className="avatar">
            <div className="w-12">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
          <div className="avatar placeholder">
            <div className="w-12 bg-neutral-800 text-neutral-content">
              <span>+99</span>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Badge -----</h1>
      <div className="flex gap-4 justify-center items-center m-2">
        <div className="badge badge-primary text-xs">primary</div>
        <div className="badge badge-primary badge-outline text-xs">primary</div>
        <div className="badge badge-info gap-2">
          <span>x</span>
          info
        </div>
        <div className="badge badge-primary badge-lg"></div>
        <div className="badge badge-primary badge-md"></div>
      </div>

      <h1 className="text-md text-center mt-8">----- Card -----</h1>
      <div className="flex flex-col items-center gap-4 m-2">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://picsum.photos/400/200" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>

            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://picsum.photos/200/300" alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Carousel -----</h1>
      <div className="m-2 px-16 ">
        <div className="carousel w-full rounded-box">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://picsum.photos/800/300?random=1"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn-carousel">
                ❮
              </a>
              <a href="#slide2" className="btn-carousel">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://picsum.photos/800/300?random=2"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn-carousel">
                ❮
              </a>
              <a href="#slide3" className="btn-carousel">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://picsum.photos/800/300?random=3"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn-carousel">
                ❮
              </a>
              <a href="#slide4" className="btn-carousel">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://picsum.photos/800/300?random=4"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn-carousel">
                ❮
              </a>
              <a href="#slide1" className="btn-carousel">
                ❯
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#slide1" className="btn btn-xs">
            1
          </a>
          <a href="#slide2" className="btn btn-xs">
            2
          </a>
          <a href="#slide3" className="btn btn-xs">
            3
          </a>
          <a href="#slide4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Chat Bubble -----</h1>
      <div className="m-2 ">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="https://picsum.photos/800/300?random=1" />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble chat-bubble-primary">
            You were the Chosen One!
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full"></div>
          </div>
          <div className="chat-bubble chat-bubble-primary">
            What kind of nonsense is this
          </div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>

        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="https://picsum.photos/800/300?random=4" />
            </div>
          </div>
          <div className="chat-header">
            Anakin <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble chat-bubble-warning">I hate you!</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full"></div>
          </div>
          <div className="chat-bubble chat-bubble-warning">AWIKWOK</div>
          <div className="chat-footer opacity-50">Seen</div>
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Coundown -----</h1>
      <div className="m-2 flex justify-center">
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ '--value': 15 }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ '--value': 10 }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ '--value': 24 }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ '--value': 30 }}></span>
            </span>
            sec
          </div>
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Keyboard -----</h1>
      <div className="m-2 flex justify-center">
        Press <kbd className="kbd kbd-sm mx-2">F</kbd> to pay respects.
      </div>

      <h1 className="text-md text-center mt-8">----- Spinner -----</h1>
      <div className="m-2 flex justify-center gap-4">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-dots text-secondary"></span>
        <span className="loading loading-ring text-success"></span>
        <span className="loading loading-ball text-warning"></span>
        <span className="loading loading-bars text-info"></span>
        <span className="loading loading-infinity text-error"></span>
      </div>

      <h1 className="text-md text-center mt-8">----- Progress -----</h1>
      <div className="flex flex-col items-center m-2 gap-6">
        <progress
          className="progress progress-primary bg-slate-200 w-56"
          value="10"
          max="100"
        ></progress>
        <progress className="progress w-56 progress-primary bg-info"></progress>
        <div className="radial-progress text-primary" style={{ '--value': 70 }}>
          70%
        </div>
        <div
          className="radial-progress bg-primary text-primary-content border-4 border-primary"
          style={{ '--value': 70 }}
        >
          70%
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Stat -----</h1>
      <div className="m-2 flex justify-center">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://picsum.photos/800/300?random=2" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Table -----</h1>
      <div className="m-2 flex justify-center items-center flex-col">
        <div className="overflow-x-auto mb-6">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://picsum.photos/800/300?random=1"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {/* row 2 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://picsum.photos/800/300?random=2"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </td>
                <td>
                  Carroll Group
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Tax Accountant
                  </span>
                </td>
                <td>Red</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {/* row 3 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://picsum.photos/800/300?random=3"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Marjy Ferencz</div>
                      <div className="text-sm opacity-50">Russia</div>
                    </div>
                  </div>
                </td>
                <td>
                  Rowe-Schoen
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Office Assistant I
                  </span>
                </td>
                <td>Crimson</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {/* row 4 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://picsum.photos/800/300?random=4"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Yancy Tear</div>
                      <div className="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>
                  Wyman-Ledner
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Community Outreach Specialist
                  </span>
                </td>
                <td>Indigo</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Tooltip -----</h1>
      <div className="m-2 flex justify-center">
        <div className="tooltip tooltip-warning" data-tip="Aku butuh uang">
          <button className="btn btn-secondary btn-sm">Hover me</button>
        </div>
      </div>
    </div>
  )
}

export default DataDisplay
