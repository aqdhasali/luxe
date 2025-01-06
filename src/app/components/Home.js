export default function LandingPage(){
    return(
        <div className="flex h-screen">
            <div className="flex items-center p-5 justify-center flex-col lg:w-1/2">
                <img className="w-48" src="Logo.jpg" alt="Luxe Logo"/>

                <h1 className="text-4xl text-center mt-2 ">LUXE USA</h1>

                <h1 className="mt-5 text-gray-900">info@luxeusa.us</h1>
                <h1 className="text-gray-900">http://www.luxeusa.us</h1>
            </div>

            
            <img className="w-1/2 hidden lg:block" src="Stay.jpeg"/>
            
        </div>
    )
}