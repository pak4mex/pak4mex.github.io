import Modal from 'react-bootstrap/Modal'
function Loader() {

    return (
        //<div className="w-full h-full" style={{backgroundColor: "rgb(33, 37, 41)", position: "absolute", zIndex: 200, display: "block"}}>
        // <Modal show={true} centered >
        // <div style={{}}>
            <div className="w-full h-full" style={{ position: "absolute", zIndex: 200, position:"fixed",
            backgroundColor: "rgba(33, 37, 41, 0.6)",
            width: "100%",
            height: "100%",
            top:"50%",
            left:"50%",
            transform:" translate(-50%,-50%)"}}>
                <div className="a-activity-indicator -large my-auto" style={{margin:"auto", top:"45%", }}>
                    <div className="a-activity-indicator__top-box" ></div>
                    <div className="a-activity-indicator__bottom-box" ></div>
                </div>
            </div>
            // </div>
        // </Modal>
    )
}

export { Loader }