const AuthModal = ({ open, setOpen }) => {
  return (
    <div>
      {!open ? (
        <div className="font-semibold ">
          <div className="border rounded-3xl bg-[#0B1618] w-[600px] mx-auto p-5 text-center flex flex-col gap-5">
            <h3 className="text-lg text-[#FFFFFF]">
              Anonymous tries exceeded....
            </h3>
            <h1 className="text-3xl text-[#B8EEEB]">
              Create Unlimited Free Design Now!
            </h1>
            <div className="flex gap-5 justify-center">
              <button
                className="py-3 px-5 bg-[#514A4A]  rounded-3xl text-2xl text-white "
                onClick={() => setOpen(!open)}
              >
                Login
              </button>
              <button
                className="py-3 px-5 bg-[#B8EEEB] rounded-3xl text-2xl "
                onClick={() => setOpen(!open)}
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AuthModal;
