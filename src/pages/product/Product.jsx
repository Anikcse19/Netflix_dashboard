import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Content</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Streamed Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="data:image/jpeg;base64,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" alt="" className="productInfoImg" />
                        <span className="productName">Content Details</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Genre:</span>
                            <span className="productInfoValue">Comedy</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in movie:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Content Name</label>
                        <input type="text" placeholder="movies/series" />
                        <label>Is recomanded</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="data:image/jpeg;base64,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" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}