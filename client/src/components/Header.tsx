import Button from "./Button"

type Props = {}

function Header({}: Props) {
  return (
    <div className="flex flex-wrap sm:flex-row gap-5 items-center justify-between drop-shadow-md bg-gradient-to-r from-myBlue to-myPink px-5 py-5 md:py-2 text-white">
        <img className="w-[70px] drop-shadow cursor-pointer" 
            src="https://res.cloudinary.com/dfogh1n6r/image/upload/v1737123786/logo-removebg_pau6es.png" alt="logo" />
        <div className="flex">
            <Button text="Add New TaskBoard" secondary/>
        </div>
    </div>
  )
}

export default Header