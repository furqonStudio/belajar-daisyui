import Navbar from './Navbar'

const DataInput = () => {
  return (
    <div className="mb-16">
      <Navbar />
      <h1 className="text-4xl text-center mt-4 font-bold">Data Input</h1>
      <h1 className="text-md text-center mt-8">
        ----- Checkbox, Radio, Toggle -----
      </h1>
      <div className="m-2 flex justify-center">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">Remember me </span>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </label>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <span className="label-text mr-2">Radio </span>
        <input type="radio" name="radio-1" className="radio" checked />
        <input type="radio" name="radio-1" className="radio" />
      </div>
      <div className="form-control w-52 m-auto">
        <label className="cursor-pointer label">
          <span className="label-text">Remember me</span>
          <input type="checkbox" className="toggle toggle-secondary" />
        </label>
      </div>

      <h1 className="text-md text-center mt-8">----- File Upload -----</h1>
      <div className="m-2 flex justify-center">
        <input
          type="file"
          className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
        />
      </div>

      <h1 className="text-md text-center mt-8">----- Range -----</h1>
      <div className="my-2 flex justify-center m-auto flex-col gap-4 max-w-md ">
        <input
          type="range"
          min={0}
          max="100"
          value="40"
          className="range range-success"
        />
        <input
          type="range"
          min={0}
          max="100"
          value="25"
          className="range range-accent"
          step="25"
        />
        <div className="w-full flex justify-between text-xs px-2">
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Range -----</h1>
      <div className="m-2 text-center ">
        <div className="rating rating-md rating-half">
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input
            type="radio"
            name="rating-10"
            className="bg-warning mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-warning mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-warning mask mask-star-2 mask-half-1"
            checked
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-warning mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-warning mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-warning mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-warning mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-warning mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-warning mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-warning mask mask-star-2 mask-half-2"
          />
        </div>
      </div>

      <h1 className="text-md text-center mt-8">----- Select -----</h1>
      <div className="m-2 text-center ">
        <select className="select select-warning w-full max-w-xs">
          <option disabled selected>
            Pick a pizza
          </option>
          <option>Cheese</option>
          <option>Veggie</option>
          <option>Pepperoni</option>
          <option>Margherita</option>
          <option>Hawaiian</option>
        </select>
      </div>

      <h1 className="text-md text-center mt-8">
        ----- Text Input & Text Area -----
      </h1>
      <div className="m-2 text-center">
        <input
          type="text"
          placeholder="Ketik Disana Aja"
          className="input input-bordered input-ghost w-full max-w-xs font-light"
        />
        <textarea
          className="block textarea textarea-info m-auto mt-4"
          placeholder="Bio"
        ></textarea>
      </div>
    </div>
  )
}

export default DataInput
