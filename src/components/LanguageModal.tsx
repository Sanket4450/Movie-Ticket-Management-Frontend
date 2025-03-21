export default function LanguageModal() {
	const closeModal = () => {
		const modal = document.getElementById("language-modal");
		if (modal) {
			modal.classList.add("hidden");
		}
	};

	return (
		<div
			id="language-modal"
			tabIndex={-1}
			aria-hidden="true"
			className="modal hidden overflow-y-auto overflow-x-hidden top-[20px] right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
		>
			<div className="relative p-4 w-full max-w-2xl max-h-full">
				<div className="relative rounded-lg shadow-sm">
					<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white">Select Language</h3>
						<button
							type="button"
							className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
							onClick={closeModal}
						>
							<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
							</svg>
							<span className="sr-only">Close modal</span>
						</button>
					</div>
					<div className="p-4 md:p-5 space-y-4">
						<div className="flex items-center">
							<input type="radio" id="english" name="language" value="english" className="mr-2" />
							<label htmlFor="english" className="text-gray-700 dark:text-gray-400">
								English
							</label>
						</div>
						<div className="flex items-center">
							<input type="radio" id="spanish" name="language" value="spanish" className="mr-2" />
							<label htmlFor="spanish" className="text-gray-700 dark:text-gray-400">
								Spanish
							</label>
						</div>
						<div className="flex items-center">
							<input type="radio" id="french" name="language" value="french" className="mr-2" />
							<label htmlFor="french" className="text-gray-700 dark:text-gray-400">
								French
							</label>
						</div>
						<div className="flex items-center">
							<input type="radio" id="german" name="language" value="german" className="mr-2" />
							<label htmlFor="german" className="text-gray-700 dark:text-gray-400">
								German
							</label>
						</div>
					</div>
					<div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
						<button
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							onClick={closeModal}
						>
							Save
						</button>
						<button
							type="button"
							className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
							onClick={closeModal}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
