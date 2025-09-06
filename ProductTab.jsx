import Product from "./Product.jsx";

function ProductTab() {
    // let features = ["scalabel", "fast", "onDemand"];
    // let features1 = { a: "hitech", b: "durable" }; we can use in object form or array as well
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItem: "center",
    };

    return (
        <div style={styles}>
            <Product title="Logitech MX Master" idx={0} />
            <Product title="Apple pencil (2nd Gen)" idx={1} />
            <Product title="Zebronics Zeb-transformer" idx={2} />
            <Product title="Potronics Toad 23" idx={3} />
        </div>
    );
}

export default ProductTab;
