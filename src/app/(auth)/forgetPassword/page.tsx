import BackButton from "@/components/molecule/backButton";

export default function ForgetPassword() {
  return (
    <section className="login max-w-[450px]">
      <div className="fixed top-0 left-8">
        <BackButton />
      </div>
      <div className="container">
        <h3 className="mb-8 uppercase">Forget Password</h3>

        <form>
          <div className="auth__input__field mb-4 ">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="grid grid-cols-12 mb-4 items-center gap-4">
            <div className="col-span-8">
              <input type="text" name="otp" />
            </div>
            <div className="col-span-4">
              <button type="button" className="bg-red-500 text-white rounded-[5px] py-1 w-full">
                Obtain
              </button>
            </div>
          </div>

          <button type="button" className="w-full text-center bg-red-500 text-white rounded-[5px] py-1 hover:bg-red-400 mb-4">
            Verify
          </button>
        </form>
      </div>
    </section>
  );
}
