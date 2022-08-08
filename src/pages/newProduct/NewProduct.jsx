import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Content</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Content</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Movies/Series" />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="Comedy/Romantic/Horor/Thriler" />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="....." />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="? Hour" />
        </div>
        <div className="addProductItem">
          <label>For Kids?</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Upload</button>
      </form>
    </div>
  );
}
