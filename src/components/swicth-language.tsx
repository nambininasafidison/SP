import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const languages = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "fr",
    label: "Français",
  },
  {
    value: "es",
    label: "Español",
  },
  {
    value: "it",
    label: "Italiano",
  },
  {
    value: "de",
    label: "Deutsch",
  },
  {
    value: "pt",
    label: "Português",
  },
  {
    value: "ru",
    label: "Русский",
  },
  {
    value: "mg",
    label: "Malagasy",
  },
];

export function SwitchLanguage(props: { className?: string }) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(i18n.language || "en");

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setValue(lang);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[200px] justify-between", props.className)}
        >
          {value
            ? languages.find((lang) => lang.value === value)?.label
            : t("language.select")}
          <ChevronsUpDown className="opacity-50 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={t("language.search")} />
          <CommandList>
            <CommandEmpty>{t("language.notFound")}</CommandEmpty>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  value={language.value}
                  onSelect={() => handleLanguageChange(language.value)}
                >
                  {language.label}
                  <Check
                    className={cn(
                      "ml-auto  h-4 w-4",
                      value === language.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
