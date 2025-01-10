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
    flag: "🇬🇧",
    value: "en",
    label: "English",
  },
  {
    flag: "🇨🇵",
    value: "fr",
    label: "Français",
  },
  {
    flag: "🇪🇦",
    value: "es",
    label: "Español",
  },
  {
    flag: "🇮🇹",
    value: "it",
    label: "Italiano",
  },
  {
    flag: "🇩🇪",
    value: "de",
    label: "Deutsch",
  },
  {
    flag: "🇵🇹",
    value: "pt",
    label: "Português",
  },
  {
    flag: "🇷🇺",
    value: "ru",
    label: "Русский",
  },
  {
    flag: "🇲🇬",
    value: "mg",
    label: "Malagasy",
  },
];

export function SwitchLanguage(props: { className?: string }) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("en");

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
          <p>
            {value && (
              <i className="mr-2">
                {languages.find((lang) => lang.value === value)?.flag}
              </i>
            )}
            {value
              ? languages.find((lang) => lang.value === value)?.label
              : t("language.select")}
          </p>
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
                  <i className="mr-3">{language.flag}</i> {language.label}
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
