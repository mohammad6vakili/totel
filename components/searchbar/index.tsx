// react imports
import { useState } from "react";
import styles from "./searchbar.module.css";

// antd imports
import { AutoComplete, Button, DatePicker, TimePicker } from "antd";

// asset imports
import CalendarIcon from "@/assets/icons/calendar";
import ClockIcon from "@/assets/icons/clock";
import SearchWhiteIcon from "@/assets/icons/search_white";

const Searchbar = () => {
  const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
  });

  const [options, setOptions] = useState<{ value: string }[]>([]);

  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  return (
    <div className={styles.searchbar_container}>
      <div className={styles.searchbar}>
        {/* where autocomplete */}
        <div id="autocomplete">
          <label htmlFor="where">Where</label>
          <div>
            <AutoComplete
              id="where"
              options={options}
              style={{ height: 48, width: "100%" }}
              onSelect={onSelect}
              onSearch={(text) => setOptions(getPanelValue(text))}
              placeholder="Minamiuonuma, Niigata"
            />
          </div>
        </div>
        {/* from datetime */}
        <div>
          <label>From</label>
          <div>
            <div id="datepicker">
              <DatePicker
                allowClear={false}
                onChange={(value) => console.log(value)}
                suffixIcon={<CalendarIcon />}
              />
            </div>
            <div id="timepicker">
              <TimePicker placeholder="None" suffixIcon={<ClockIcon />} />
            </div>
          </div>
        </div>
        {/* to datetime */}
        <div>
          <label>To</label>
          <div>
            <div id="datepicker">
              <DatePicker
                allowClear={false}
                onChange={(value) => console.log(value)}
                suffixIcon={<CalendarIcon />}
              />
            </div>
            <div id="timepicker">
              <TimePicker placeholder="None" suffixIcon={<ClockIcon />} />
            </div>
          </div>
        </div>
        <div>
          <Button id="btn_primary">
            <SearchWhiteIcon />
          </Button>
        </div>
        <div className={styles.mobile_search_btn}>
          <Button id="btn_royal">Search</Button>
        </div>
      </div>
    </div>
  );
};
export default Searchbar;
