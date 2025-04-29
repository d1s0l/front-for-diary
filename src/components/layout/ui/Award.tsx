import { LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

type AwardType = "certificate" | "cup" | "medal" | "default";

interface AwardsProps {
    label: string;
    sublabel?: string;
    place?: number;
    icon?: React.ComponentType<LucideProps>;
    iconProps?: LucideProps;
    bgcolor?: string;
    awardType?: AwardType;
    className?: string;
}

export const Awards = ({
    label,
    sublabel,
    place,
    icon: Icon,
    iconProps = { size: 40 },
    bgcolor,
    awardType,
    className,
}: AwardsProps) => {
    const getBgColor = (place?: number, awardType?: AwardType) => {
        if (bgcolor) return bgcolor;
        
        if (!place) return "bg-gray-100";
        
        if (awardType === "certificate") {
            return "bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200";
        }
        
        if (awardType === "cup") {
            return "bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200";
        }

        switch (place) {
            case 1: return "bg-gradient-to-r from-yellow-400 to-yellow-200";
            case 2: return "bg-gradient-to-r from-gray-300 to-gray-100";
            case 3: return "bg-gradient-to-r from-amber-600 to-amber-400";
            default: return "bg-gray-100";
        }
    };

    return (
        <div
            className={cn(
                "flex flex-col w-[216px] h-[282px] p-6 rounded-lg relative overflow-hidden",
                getBgColor(place, awardType),
                className
            )}
        >
            {/* Иконка в правом верхнем углу */}
            {Icon && (
                <div className="absolute top-4 left-4">
                    <Icon {...iconProps} />
                </div>
            )}

            {/* Основное содержимое */}
            <div className="flex flex-col h-full text-stone-700 justify-between">
                <div>
                    {/* Место/позиция */}
                    {place && (
                        <div className="text-4xl font-bold mb-4">
                            {place === 1 ? "1" : place === 2 ? "2" : place === 3 ? "3" : ""}
                            <span className="text-lg"> место</span>
                        </div>
                    )}

                    {/* Заголовок */}
                    <div className="text-xl font-medium mb-2">
                        {label}
                    </div>
                </div>

                {/* Подзаголовок (внизу) */}
                {sublabel && (
                    <div className=" text-sm text-muted-foreground">
                        {sublabel}
                    </div>
                )}
            </div>
        </div>
    );
};