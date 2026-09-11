import React, { Component, lazy, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const TechnologyCard = lazy(() => import("./components/TechnologyCard"));

export class App extends Component {
  state = { technologies: [], selectedStack: [], loading: true };

  componentDidMount() {
    fetch(`${import.meta.env.BASE_URL}data/technologies.json`)
      .then((response) => {
        if (!response.ok) throw new Error("Could not load technology data.");
        return response.json();
      })
      .then((data) => {
        this.setState({ technologies: data, selectedStack: [] });
      })
      .catch(() => toast.error("Could not load technology data."))
      .finally(() => this.setState({ loading: false }));
  }

  addToStack = (technology) => {
    const { selectedStack } = this.state;

    if (selectedStack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    this.setState({ selectedStack: [...selectedStack, technology] });
    toast.success(`${technology.name} added to your stack.`);
  };

  removeFromStack = (id) => {
    this.setState(({ selectedStack }) => ({
      selectedStack: selectedStack.filter((item) => item.id !== id),
    }));
  };

  removeAll = () => this.setState({ selectedStack: [] });

  render() {
    const { technologies, selectedStack, loading } = this.state;

    return (
      <>
        <Navbar selectedCount={selectedStack.length} />

        <main>
          <Hero />

          <section className="bg-white px-0 py-[30px] pb-[90px] max-[760px]:py-[25px] max-[760px]:pb-[60px]" id="technologies">
            <div className="mx-auto w-[min(1090px,calc(100%-48px))] max-[760px]:w-[calc(100%-28px)]">
              <div className="mb-8 max-[760px]:mb-[22px]">
                <h2 className="text-[29px] font-extrabold leading-[1.2] tracking-[-1.1px] max-[760px]:text-[27px]">
                  Explore the{" "}
                  <span className="bg-linear-to-r from-[#2563eb] via-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                    Technologies
                  </span>
                </h2>
                <p className="mt-[7px] text-[12px] text-[#8794a7] max-[760px]:text-[11px]">
                  Pick one technology per category to build your ideal stack.
                </p>
              </div>

              {loading ? (
                <Loading />
              ) : (
                <div className="grid grid-cols-[minmax(0,1fr)_220px] items-start gap-[22px] max-[980px]:grid-cols-1">
                  <div className="grid grid-cols-3 gap-[18px] max-[760px]:grid-cols-1 max-[760px]:gap-[13px]">
                    <Suspense fallback={<Loading />}>
                      {technologies.map((technology) => (
                        <TechnologyCard
                          key={technology.id}
                          technology={technology}
                          isAdded={selectedStack.some((item) => item.id === technology.id)}
                          onAdd={this.addToStack}
                        />
                      ))}
                    </Suspense>
                  </div>

                  <aside className="rounded-[13px] border border-[#e8edf3] bg-white p-[17px] shadow-[0_4px_15px_rgba(16,24,40,.035)] max-[760px]:order-[-1]">
                    <h3 className="text-[13px] font-semibold">Your Stack</h3>
                    <p className="mt-[3px] text-[8px] text-[#a0aabb]">{selectedStack.length} Technology Selected</p>

                    {selectedStack.length > 0 ? (
                      <>
                        <div className="mt-3 flex flex-col gap-[7px] max-[980px]:grid max-[980px]:grid-cols-2 max-[760px]:grid-cols-1">
                          {selectedStack.map((technology) => (
                            <div className="flex min-h-10 items-center gap-[7px] rounded-[7px] border border-[#e6eaf0] px-[7px] py-1.5" key={technology.id}>
                              <img className="h-5 w-5 object-contain" src={technology.icon} alt="" />
                              <div className="flex min-w-0 flex-1 flex-col">
                                <strong className="text-[8px]">{technology.name}</strong>
                                <span className="text-[7px] text-[#a0aabb]">{technology.category}</span>
                              </div>
                              <button className="border-0 bg-transparent text-lg leading-none text-[#aab4c1]" type="button" onClick={() => this.removeFromStack(technology.id)} aria-label={`Remove ${technology.name}`}>
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                        <button
                          className="mt-8 h-7 w-full rounded-[5px] border border-[#ffb7b0] bg-white text-[9px] text-[#ef5547] disabled:cursor-not-allowed disabled:opacity-55 max-[980px]:mt-4"
                          type="button"
                          onClick={this.removeAll}
                          disabled={selectedStack.length === 0}
                        >
                          Remove All
                        </button>
                      </>
                    ) : (
                      <div className="mt-3 flex min-h-[105px] items-center justify-center rounded-[14px] border border-dashed border-[#d7e0ec] text-center text-[10px] text-[#9aa9bd]">
                        <p>Your stack is empty.</p>
                      </div>
                    )}
                  </aside>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={2200}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="light"
        />
      </>
    );
  }
}

export default App;
