import { render, screen, act} from "@testing-library/react";
import StatisticsScreen from "./StatisticsScreen";
import { BrowserRouter as Router } from "react-router-dom";
import type { DateTimeFormatOptions } from "intl";

describe("StatisticsScreen", () => {
    const dateOptions: DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
    };
    const timeOptions: DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };
    const now = new Date();

    const date = now.toLocaleDateString("en-GB", dateOptions);
    const time = now.toLocaleTimeString("en-GB", timeOptions);

    const statistics = {
        [date]: [
            {
                trackingId: "1234567890",
                date: date,
                time: time,
            },
            {
                trackingId: "0987654321",
                date: date,
                time: time,
            },
        ],
    };

    it("displays statistics for selected date", () => {
        render(
            <Router>
                <StatisticsScreen statistics={statistics} />{" "}
            </Router>
        );

        const countElement = screen.getByTestId("trackedCount");
        expect(countElement).toHaveTextContent("2");

        const lastUpdatedTimeElement = screen.getByText(/last tracked at/i);
        expect(lastUpdatedTimeElement).toHaveTextContent(time);

        // const trackingIdElements = screen.getByTestId("statisticsRows");
        // expect(trackingIdElements).toHaveLength(2);

        const dateElements = screen.getAllByText(date + ",");
        expect(dateElements).toHaveLength(2);

        const timeElements = screen.getAllByText(time);
        expect(timeElements).toHaveLength(2);
    });

});
