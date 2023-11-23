import MobileNavbar from "../MobileNavbar/MobileNavbar"
import FormComponent from "./Form"

const Container = () => {
    return (
        <div className="w-full flex flex-auto bg-shark-950 relative justify-center items-center">
            <MobileNavbar />
            <FormComponent />
        </div>
    )
}

export default Container