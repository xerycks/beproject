import React from "react";

function Dashboard() {

    const data = [
        {
            id: 1,
            imageAddress: "https://images.unsplash.com/photo-1519074031893-210d39bd3885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2524&q=80",
            timestamp: "2021-06-01 12:00:00",
            location: "28.7041° N, 77.1025° E",
            result: "No Threats Detected"
        },
        {
            id: 2,
            imageAddress: "https://images.unsplash.com/photo-1629032563246-19ee3aeb7dc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
            timestamp: "2021-06-01 12:00:00",
            location: "28.7041° N, 77.1025° E",
            result: "Planes & Helicopters Detected"
        },
        {
            id: 3,
            imageAddress: "https://images.unsplash.com/photo-1620059116993-398c21ce8406?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
            timestamp: "2021-06-01 12:00:00",
            location: "28.7041° N, 77.1025° E",
            result: "Bunkers Detected"
        },
        // generate 10 more with random result
        {
            id: 4,
            imageAddress: "https://plus.unsplash.com/premium_photo-1661875250660-5cb2e21e5a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
            timestamp: "2021-06-01 12:00:00",
            location: "28.7041° N, 77.1025° E",
            result: "No Threats Detected"
        },
        {
            id: 5,
            imageAddress: "https://images.unsplash.com/photo-1535332489047-1170f3fff966?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80",
            timestamp: "2021-06-01 12:00:00",
            location: "28.7041° N, 77.1025° E",
            result: "Planes & Helicopters Detected"
        },
        {
            id: 6,
            imageAddress: "https://images.unsplash.com/photo-1635794675394-8246d343234b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1pbGl0YXJ5JTIwYnVua2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            timestamp: "2021-06-01 12:00:00",
            location: "28.7041° N, 77.1025° E",
            result: "Bunkers Detected"
        },
        {
            id: 7,
            imageAddress: "https://images.unsplash.com/photo-1629032642277-a112ec9fe93b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            timestamp: "2021-06-01 12:00:00",
            location: "28.7041° N, 77.1025° E",
            result: "No Threats Detected"
        }
    ]

    return (
        <>
            <div>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light px-md-2 px-0">
                    <div className="container-fluid m-0 px-3">
                        <button className=" font-bolder display-7 text-center">DefenseVision</button>

                        <div className="d-flex">
                            <button className="btn btn-sm btn-outline-primary me-2">Scan New Image</button>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Already Scaned Images */}
            <div className="container-fluid mt-5 px-md-5 px-2">
                <p className="small-heading px-5">Scanned History</p>
                {/* place image in grid to fit all type of sizes */}
                <div className="row m-0 mt-4 justify-content-start align-content-start align-itmes-start">
                    { // map through all the images
                        data.map((item) => {
                            return (
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3 scanned-img mb-10" key={item.id}>
                                    <img src={item.imageAddress} alt="img" className="img-fluid" />
                                    <div className="img-info">
                                        <p className="small-heading">
                                            {item.result}
                                        </p>
                                        <p className="smaller-heading">{item.location}, {item.timestamp}</p>

                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>

        </>
    );
}

export default Dashboard;