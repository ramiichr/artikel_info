import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Paper,
  Alert,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Search as SearchIcon,
  LocalShipping as DeliveryIcon,
  LocationOff as NoLocationIcon,
  Flag as FlagIcon,
  Inbox as BoxIcon,
  ViewList as PalletIcon,
  Visibility as ViewIcon,
} from "@mui/icons-material";

interface MainContentProps {
  selectedSection: string;
  isLoggedIn: boolean;
}

const MainContent: React.FC<MainContentProps> = ({
  selectedSection,
  isLoggedIn,
}) => {
  if (!isLoggedIn && selectedSection !== "dashboard") {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <Alert severity="warning" sx={{ maxWidth: 400 }}>
          <Typography variant="h6" gutterBottom>
            Anmeldung erforderlich
          </Typography>
          <Typography>
            Bitte melden Sie sich an, um auf diese Funktion zuzugreifen.
          </Typography>
        </Alert>
      </Box>
    );
  }

  const renderDashboard = () => (
    <Box>
      <Typography variant="h4" gutterBottom color="primary" sx={{ mb: 3 }}>
        Artikel Info Dashboard
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: 3,
        }}
      >
        <Card
          sx={{
            height: "100%",
            cursor: "pointer",
            "&:hover": { elevation: 4 },
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <SearchIcon sx={{ fontSize: 40, color: "#1976d2", mr: 2 }} />
              <Typography variant="h5" component="h2">
                Artikelsuche
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Gezielte Suche per ASIN, Bestkunz, EAN oder SKU mit Anzeige von
              Produktinfos, Lagerständen, Memos, Angeboten, offene Bestellungen,
              Historie, gesperrte Lieferungen und Lieferanten.
            </Typography>
            <Button variant="contained" fullWidth>
              Alle ansehen
            </Button>
          </CardContent>
        </Card>

        <Card
          sx={{
            height: "100%",
            cursor: "pointer",
            "&:hover": { elevation: 4 },
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <DeliveryIcon sx={{ fontSize: 40, color: "#1976d2", mr: 2 }} />
              <Typography variant="h5" component="h2">
                Offene Lieferungen
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Liste offener Lieferungen mit Informationen zu Paketschreint,
              Labels und Flags, voraussichtlichem Lieferdatum, Pickplatz, Picker
              sowie Pickzeit.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                Aktuell 711 offene Lieferungen
              </Typography>
            </Box>
            <Button variant="contained" fullWidth>
              Alle ansehen
            </Button>
          </CardContent>
        </Card>

        <Card
          sx={{
            height: "100%",
            cursor: "pointer",
            "&:hover": { elevation: 4 },
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <NoLocationIcon sx={{ fontSize: 40, color: "#1976d2", mr: 2 }} />
              <Typography variant="h5" component="h2">
                Artikel ohne Fach
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Liste aller Artikel ohne Fachzuordnung mit Anzahl geparkter
              Artikel und Informationen zur Warennahme.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                Aktuell 86 Artikel ohne Fach
              </Typography>
            </Box>
            <Button variant="contained" fullWidth>
              Alle ansehen
            </Button>
          </CardContent>
        </Card>

        <Card
          sx={{
            height: "100%",
            cursor: "pointer",
            "&:hover": { elevation: 4 },
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <FlagIcon sx={{ fontSize: 40, color: "#1976d2", mr: 2 }} />
              <Typography variant="h5" component="h2">
                Flag Filter
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Zeigt Artikel mit speziellen Kennzeichnungen (Flags) wie Sensible
              Artikel, Hygieneartikel, Sperrgut, Sonderpackplatz, Palettenware,
              Montagerartikel oder unverpackte Artikel.
            </Typography>
            <Button variant="contained" fullWidth>
              Filter wählen
            </Button>
          </CardContent>
        </Card>

        <Card
          sx={{
            height: "100%",
            cursor: "pointer",
            "&:hover": { elevation: 4 },
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <BoxIcon sx={{ fontSize: 40, color: "#1976d2", mr: 2 }} />
              <Typography variant="h5" component="h2">
                Box Inhalt
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Zeigt alle Artikel, die in einer bestimmten Box enthalten sind.
            </Typography>
            <TextField
              fullWidth
              placeholder="Box Id eingeben oder scannen"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2 }}
            />
          </CardContent>
        </Card>

        <Card
          sx={{
            height: "100%",
            cursor: "pointer",
            "&:hover": { elevation: 4 },
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <PalletIcon sx={{ fontSize: 40, color: "#1976d2", mr: 2 }} />
              <Typography variant="h5" component="h2">
                Paletten Liste
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Kommissionier-Liste mit relevanten Paletteninfos innerhalb der
              Lageranwendung.
            </Typography>
            <Button variant="contained" fullWidth>
              Kommissionier-Liste ansehen
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );

  const renderArtikelsuche = () => (
    <Box>
      <Typography variant="h4" gutterBottom color="primary">
        Artikelsuche
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Gezielte Suche per ASIN, Bestkunz, EAN oder SKU mit Anzeige von
        Produktinfos, Lagerständen, Memos, Angeboten, offene Bestellungen,
        Historie, gesperrte Lieferungen und Lieferanten.
      </Typography>
      <Paper sx={{ p: 3 }}>
        <TextField
          fullWidth
          placeholder="Artikelsuche nach ASIN, Bestkunz, EAN oder SKU"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </Box>
  );

  const renderOffeneLieferungen = () => (
    <Box>
      <Typography variant="h4" gutterBottom color="primary">
        Offene Lieferungen
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Liste offener Lieferungen mit Informationen zu Paketschreint, Labels und
        Flags, voraussichtlichem Lieferdatum, Pickplatz, Picker sowie Pickzeit.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Chip
          label="Aktuell 711 offene Lieferungen"
          color="primary"
          variant="outlined"
          size="medium"
        />
        <Button variant="contained" startIcon={<ViewIcon />}>
          Alle ansehen
        </Button>
      </Box>
    </Box>
  );

  const renderArtikelOhneFach = () => (
    <Box>
      <Typography variant="h4" gutterBottom color="primary">
        Artikel ohne Fach
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Liste aller Artikel ohne Fachzuordnung mit Anzahl geparkter Artikel und
        Informationen zur Warennahme.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Chip
          label="Aktuell 86 Artikel ohne Fach"
          color="warning"
          variant="outlined"
          size="medium"
        />
        <Button variant="contained" startIcon={<ViewIcon />}>
          Alle ansehen
        </Button>
      </Box>
    </Box>
  );

  const renderFlagFilter = () => (
    <Box>
      <Typography variant="h4" gutterBottom color="primary">
        Flag Filter
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Zeigt Artikel mit speziellen Kennzeichnungen (Flags) wie Sensible
        Artikel, Hygieneartikel, Sperrgut, Sonderpackplatz, Palettenware,
        Montagerartikel oder unverpackte Artikel.
      </Typography>
      <Paper sx={{ p: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="flag-select-label">Bitte Flag auswählen</InputLabel>
          <Select
            labelId="flag-select-label"
            id="flag-select"
            label="Bitte Flag auswählen"
          >
            <MenuItem value="sensible">Sensible Artikel</MenuItem>
            <MenuItem value="hygiene">Hygieneartikel</MenuItem>
            <MenuItem value="oversized">Sperrgut</MenuItem>
            <MenuItem value="special-pack">Sonderpackplatz</MenuItem>
            <MenuItem value="pallet">Palettenware</MenuItem>
            <MenuItem value="assembly">Montagerartikel</MenuItem>
            <MenuItem value="unpackaged">Unverpackte Artikel</MenuItem>
          </Select>
        </FormControl>
      </Paper>
    </Box>
  );

  const renderBoxInhalt = () => (
    <Box>
      <Typography variant="h4" gutterBottom color="primary">
        Box Inhalt
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Zeigt alle Artikel, die in einer bestimmten Box enthalten sind.
      </Typography>
      <Paper sx={{ p: 3 }}>
        <TextField
          fullWidth
          placeholder="Box Id eingeben oder scannen"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </Box>
  );

  const renderPalettenListe = () => (
    <Box>
      <Typography variant="h4" gutterBottom color="primary">
        Paletten Liste
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Kommissionier-Liste mit relevanten Paletteninfos innerhalb der
        Lageranwendung.
      </Typography>
      <Button variant="contained" size="large" startIcon={<ViewIcon />}>
        Kommissionier-Liste ansehen
      </Button>
    </Box>
  );

  const renderContent = () => {
    switch (selectedSection) {
      case "search":
        return renderArtikelsuche();
      case "deliveries":
        return renderOffeneLieferungen();
      case "no-location":
        return renderArtikelOhneFach();
      case "flag-filter":
        return renderFlagFilter();
      case "box-content":
        return renderBoxInhalt();
      case "pallet-list":
        return renderPalettenListe();
      default:
        return renderDashboard();
    }
  };

  return <Box>{renderContent()}</Box>;
};

export default MainContent;
