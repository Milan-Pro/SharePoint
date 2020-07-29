import * as React from "react";
import { CourseProvider } from "../../../services/CourseProvider";

export const ProviderContext = React.createContext<CourseProvider>(new CourseProvider("",null));