import { IconTextElement } from "@/components/layout/ui/Header";
import Profile from "@/components/layout/ui/Profile";
import { Schedule } from "@/components/layout/ui/Schedules/ScheduleForSchedulePage";
import { Calendar } from "lucide-react";
import { scheduleData } from "@/data/schedule-data";

export default function SchedulePage() {
  const daysToShow = [scheduleData[0], scheduleData[1], scheduleData[2], scheduleData[3], scheduleData[4], scheduleData[5]];

  return (
    <div className="container mx-auto px-4 py-6">
      <header className="flex justify-between items-center mb-10">
        <IconTextElement icon={Calendar} text='Расписание' />
        <Profile />
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {daysToShow.map((daySchedule, index) => (
          <div key={index} className="h-full">
            <Schedule 
              data={[daySchedule]}
              visibleLessons={3}
            />
          </div>
        ))}
      </section>
    </div>
  );
}