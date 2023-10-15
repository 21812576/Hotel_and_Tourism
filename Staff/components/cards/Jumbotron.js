export default function Jumbotron({title, subTitle = "welcome to kings bay hotel"} ){
    return (
        <div className="container-fluid bg-primary">
            <div className="row">
                <div className="col text-center p-4 bg-light">
                    <h1>{title}</h1>
                    <p className="lead">{subTitle}</p>
                </div>
            </div>
        </div>
    );
}