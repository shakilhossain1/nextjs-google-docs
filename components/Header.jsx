import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

export default function Header() {
  return (
    <div className="px-4 py-2 shadow-md sticky top-0 flex items-center ">
      <Button
        color="blue"
        rounded={true}
        iconOnly={true}
        buttonType="outline"
        ripple="dark"
        className="border-0 h-20 w-20"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h2 className="text-2xl font-bold">Docs</h2>
      <div className="flex-grow bg-gray-100 flex items-center px-5 py-2 text-gray-600 rounded-lg mx-5 md:mx-20 focus-within:shadow-md">
        <Icon name="search" size="3xl" color="darkGray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 text-base bg-transparent outline-none"
        />
      </div>
      <Button
        color="blue"
        rounded={true}
        iconOnly={true}
        buttonType="outline"
        ripple="dark"
        className="ml-5 md:ml-20 border-0 h-20 w-20"
      >
        <Icon name="apps" size="3xl" />
      </Button>
      <img
        loading="lazy"
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        className="rounded-full h-12 w-12 cursor-pointer ml-2 object-cover"
        alt=""
      />
    </div>
  );
}
