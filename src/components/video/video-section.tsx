export const VideoSection = () => {
	return (
		<section className="bg-muted pt-10 md:pt-12 pb-16 md:pb-20 px-6">
			<div className="max-w-3xl mx-auto">
				<h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
					Así de simple
				</h3>
				<div className="flex justify-center">
					<div className="bg-accent-foreground rounded-xl p-3 shadow-lg">
						<iframe
							title="Mylos Demo"
							src="https://www.youtube.com/embed/waiDCqs2_BE"
							className="w-64 md:w-80 aspect-[9/16] rounded-lg"
							allow="autoplay; encrypted-media"
							allowFullScreen
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
