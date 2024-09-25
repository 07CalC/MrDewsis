


export const MainBanner = () => {

    return(
        <div className="rounded-2xl p-4 md:flex grid justify-center items-center bg-white h-2/6 w-full">
            <div className="flex items-center justify-center md:w-1/3 w-full rounded-xl">
            <img src="https://res.cloudinary.com/dkhymc3li/image/upload/v1727280354/manchurian-Photoroom_tearfy.png" className="w-full"/>
            </div>
            <div className="mx-12 text-black text-center items-center flex flex-col justify-center">
                <p className="text-[#2ea86c] text-3xl font-serif">Welcome to</p>
                <strong className="text-[#208856] text-6xl font-serif">MR Dewsis</strong>
                <p className="text-[#2ea86c] text-4xl font-serif">Where Taste matters</p>
                <p className="text-[#208856] text-4xl font-serif">And your<strong> Bank Balance</strong> too</p>
                
            </div>
            <div className=" w-1/3 rounded-xl">
            <img src="https://static.vecteezy.com/system/resources/previews/036/464/807/original/ai-generated-a-plate-of-fried-rice-isolated-on-a-transparent-background-top-view-cut-out-png.png" className="hidden md:flex w-full"/>
            </div>
        </div>
    )
}
    