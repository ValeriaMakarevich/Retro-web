import { lazy, Suspense } from "react"
import { useParams } from "react-router-dom";

const eraComponents = {
  "1969": lazy(() => import("./Year1969/Year1969")),
  "1983": lazy(() => import("./Year1983/Year1983")),
  "1990": lazy(() => import("./Year1990/Year1990")),
  "1993": lazy(() => import("./Year1993/Year1993")),
  "1995": lazy(() => import("./Year1995/1995Year")),
  "2004": lazy(() => import("./Year2004/Year2004")),
  "2006": lazy(() => import("./Year2006/Year2006")),
} as const;

type EraYear = keyof typeof eraComponents;


export default function Eras(){
    const { year } = useParams<{ year: string }>();

    const Component = year && year in eraComponents ? eraComponents[year as EraYear] : null;

  if (!Component) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        Год <strong>{year}</strong> ещё не готов или не найден
      </div>
    );
  }

    return(
        <Suspense>
            <Component/>
        </Suspense>
    )
}