import addEvent from "@/app/actions/addEvent";
const EventAddForm = ({ breweryId, breweryName }) => {
    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add Event to {breweryName}</h2>
            <form action={addEvent} className="space-y-4">
                {/* Hidden input to pass the brewery ID */}
                <input type="hidden" name="brewery" value={breweryId} />

                {/* Event Name */}
                <div>
                    <label
                        htmlFor="event_name"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Event Name
                    </label>
                    <input
                        type="text"
                        id="event_name"
                        name="event_name"
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter event name"
                    />
                </div>

                {/* Description */}
                <div>
                    <label
                        htmlFor="description"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter event description"
                        rows="4"
                    ></textarea>
                </div>

                {/* Date */}
                <div>
                    <label
                        htmlFor="date"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                {/* Start Time */}
                <div>
                    <label
                        htmlFor="time"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Start Time
                    </label>
                    <input

                        id="time"
                        name="time"
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                {/* End Time */}
                <div>
                    <label
                        htmlFor="end_time"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        End Time
                    </label>
                    <input

                        id="end_time"
                        name="end_time"
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Event
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EventAddForm;