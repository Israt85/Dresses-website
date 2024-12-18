import Tables2 from "./Tables2";

const SalesOrder = () => {
    return (
        <div className="bg-white shadow-xl py-10 rounded-lg">
            <div className="flex justify-between my-6 mx-2 font-Inter">
                <p className="text-lg">Latest Order</p>
                <p className="text-sm flex gap-1 items-center">More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.58545 8.38949H12.2394M12.2394 8.38949L7.91244 4.0625M12.2394 8.38949L7.91244 12.7165" stroke="#8E95A9" stroke-width="1.85443" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </p>
            </div>

            <Tables2></Tables2>
        </div>
    );
};

export default SalesOrder;