import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';

interface Category {
    name: string;
    value: number;
}
const TotalHoursChart = ({categories}:{categories:Array<Category>}) => {
    const values = categories.map(category => category.value);
    const colors = ["#64B3EB","#9a45f2","#ffce73","#e2e2eb"]
    const data = {
      
        datasets: [{
         
            data: values,
            backgroundColor: [
                'rgb(255, 206, 115)',
                'rgb(226, 226, 235)',
                'rgb(100, 179, 235)',
                'rgb(154, 69, 242)'
            ],
            hoverOffset: 4
        }]
    }

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        borderRadius: {
            innerStart: 20,
            outerStart: 20,
        },
        cutout: 80,
        rotation: 1.25 * Math.PI,
    }

    return (
        <div className="card m-4 2xl:pb-8">
            <div className="pt-6 pr-8 pl-7">
                <label className="basis-1/2 card-text">Total working hours</label>
            </div>
            <div className="sm:flex sm:flex-row">
                <div className="static basis-1/2 grid justify-items-center">
                    <div className="relative  h-[30vh] w-[30vh] md:h-[30vh] md:w-[30vh] lg:h-[30vh] lg:w-[30vh] xl:h-[30vh] xl:w-[30vh] 2xl:h-[20vh] 2xl:w-[20vh] self-center">
                        <Doughnut
                            data={data}
                            options={options}
                        />
                    </div>
                    <div className="absolute self-center ">
                        <label className="working-hours-center-text ">9 hrs</label>
                    </div>
                </div>
                <div className="basis-1/2 flex-auto ml-6 mt-10">
                
                    {
                        categories.map((category, index) => {
                            return (
                                <div className="flex flex-auto mt-4">
                                    <span className={"m-1 dot bg-["+colors[index]+"]"}></span>
                                    <span className="flex-auto graph-label">{category.name}</span>
                                    <span className="flex-none graph-sub-label pr-12">{category.value} hrs</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default TotalHoursChart;