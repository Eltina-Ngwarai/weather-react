import React from "react";


export default function Footer() {
  return (
    <form id="search-form" class="mb-3">
      <div class="row">
        <div class="col-9">
          <input
            type="search"
            placeholder="Type a city"
            class="form-control"
            id="city-input"
            autocomplete="off"
          />
        </div>
        <div class="col-3">
          <input
            type="submit"
            value="search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );
}
