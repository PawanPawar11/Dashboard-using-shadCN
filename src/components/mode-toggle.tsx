import { Button } from "@/components/ui/button";

import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { mode, setMode, color, setColor } = useTheme();

  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg">
      {/* Option 1: Mode */}
      <div>
        <h4 className="text-sm font-medium mb-2">Appearance</h4>
        <div className="flex gap-2">
          {["light", "dark", "system"].map((m) => (
            <Button
              key={m}
              variant={mode === m ? "default" : "outline"}
              onClick={() => setMode(m as any)}
            >
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Option 2: Accent Color */}
      <div>
        <h4 className="text-sm font-medium mb-2">Accent Color</h4>
        <div className="flex gap-2">
          {/* Default (Slate/Zinc) */}
          <button
            onClick={() => setColor("default")}
            className={`w-6 h-6 rounded-full bg-slate-900 border-2 ${color === "default" ? "border-blue-500" : "border-transparent"}`}
          />
          {/* Rose */}
          <button
            onClick={() => setColor("rose")}
            className={`w-6 h-6 rounded-full bg-rose-500 border-2 ${color === "rose" ? "border-blue-500" : "border-transparent"}`}
          />
          {/* Violet - Changed bg class to match the name */}
          <button
            onClick={() => setColor("violet")}
            className={`w-6 h-6 rounded-full bg-violet-500 border-2 ${color === "violet" ? "border-blue-500" : "border-transparent"}`}
          />
        </div>
      </div>
    </div>
  );
}
