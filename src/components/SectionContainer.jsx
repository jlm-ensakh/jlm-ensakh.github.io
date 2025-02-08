const SectionContainer = ({ className, children }) => {
    return (
        <section className={`p-10 ${className}`}>
            <div className="mx-auto max-w-full md:max-w-4xl xl:max-w-6xl">
                {children}
            </div>
        </section>
    );
}

export default SectionContainer;