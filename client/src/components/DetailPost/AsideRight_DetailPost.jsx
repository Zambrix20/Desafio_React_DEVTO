export default function AsideRight_DetailPost() {
    return (
        <aside className="">
            <div className="bg-white border-t-[30px] border border-t-black rounded-t-md">
                <div className="p-4 pt-0 grid ">
                    <div className="-mt-4 flex gap-2 ">
                        <img
                            src="https://res.cloudinary.com/practicaldev/image/fetch/s--80Xs8zXP--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1067852/9c972a7a-5c3e-4663-ad30-21fe9b9b0c62.jpeg"
                            alt="Ben Halpern"
                            className="w-12 h-12 rounded-full border-solid border-2 border-gray-400/50 cursor-pointer"
                        />
                        <h2 className="mt-5 font-bold cursor-pointer hover:text-blue-800 ">Jasper Gabriel</h2>
                    </div>
                    <button className="bg-blue-700 text-white rounded-md px-4 py-2 mt-4 w-full hover:bg-blue-800">Follow</button>
                    <p>
                        Software engineer. I write about my experiences and the cool stuff I
                        learn!
                    </p>
                    <div>
                        <ul>
                            <div>LOCATION</div>
                            <div>Philippines</div>
                        </ul>
                        <ul>
                            <div>EDUCATION</div>
                            <div>Computer Engineering</div>
                        </ul>
                        <ul>
                            <div>He/Him</div>
                        </ul>
                        <ul>
                            <div>Work</div>
                            <div>Software Engineer</div>
                        </ul>
                        <ul>
                            <div>JOINED</div>
                            <div>19 abr 2023</div>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    );
}
