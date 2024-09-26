export const Subscription = () => {
  return (
    <div className="w-full md:mt-0 md:p-10 py-10 flex flex-col  items-center justify-center">
      <div className="flex flex-col items-center justify-center p-10 rounded-2xl bg-white py-10">
        <strong className="text-5xl text-[#208856] font-serif">Dewsis Pro Membership</strong>
        <div className="grid mt-6 justify-center items-center rounded-xl grid-cols-1 md:grid-cols-2 p-8">
            <div className="w-4/5 p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
                <strong>Exclusive Discounts</strong>
                <p>Enjoy exclusive discounts on your favorite cafe items and special offers.</p>
            </div>
            <div className="w-4/5 p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
                <strong>Early Access</strong>
                <p>Be among the first to try new menu items and seasonal specials.</p>
            </div>
            <div className="w-4/5 p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
                <strong>Personalized Recommendations</strong>
                <p>Receive personalized recommendations based on your past orders and preferences.</p>
            </div>
            <div className="w-4/5 p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
                <strong>Free Delivery</strong>
                <p>Enjoy free delivery on all your orders, saving you time and money.</p>
            </div>
        </div>
        <div className="mt-6 flex flex-col justify-center items-center">
            <strong className="text-3xl font-mono">Become a Pro member for just 99/- per month</strong>
            <button className="bg-[#208856] mt-4 p-4 text-white hover:bg-[#27a567] h-full rounded-2xl">
              Join Now
            </button>
        </div>
      </div>
    </div>
  );
};
